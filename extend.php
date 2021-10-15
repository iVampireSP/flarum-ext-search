<?php

namespace Blomstra\Search;

use Flarum\Extend as Flarum;

return [
    (new Flarum\ServiceProvider)->register(Provider::class),

    (new Flarum\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    (new Flarum\Routes('api'))
        ->get('/blomstra/search/{type}', 'blomstra.search', Api\Controllers\SearchController::class),

    (new Flarum\Console)
        ->command(Commands\RebuildDocumentsCommand::class)
];
