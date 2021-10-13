<?php

namespace Blomstra\Search\Api\Controllers;

use Blomstra\Search\Schemas\Schema;
use Flarum\Api\Controller\AbstractListController;
use Illuminate\Contracts\Container\Container;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use MeiliSearch\Client;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class SearchController extends AbstractListController
{
    public function __construct(protected Client $meili)
    {}

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $index = Arr::get($request->getQueryParams(), 'index');
        $filters = $this->extractFilter($request);

        $schema = $this->getSchema($index);

        $result = $this->meili->index($index)->search($filters['q'], [
            'offset' => $this->extractOffset($request),
            'limit' => $this->extractLimit($request),
            'sort' => $this->extractSort($request)
        ]);

        $this->serializer = $schema::serializer();

        return Collection::make($result->getHits())
            ->map(function ($hit) use ($schema) {
                return $schema::model()::query()->find($hit['id']);
            });
    }

    protected function getSchema(string $index): ?Schema
    {
        $mapping = resolve(Container::class)->tagged('blomstra.search.schemas');

        return collect($mapping)->first(function (Schema $schema) use ($index) {
            return $schema::index() === $index;
        });
    }
}
