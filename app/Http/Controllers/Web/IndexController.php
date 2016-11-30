<?php

namespace App\Http\Controllers;

class IndexController extends Controller
{
    /**
     * Serve the angular application.
     *
     * @return JSON
     */
    public function index()
    {
        return view('web.index');
    }

    /**
     * Page for unsupported browsers.
     *
     * @return JSON
     */
    public function unsupported()
    {
        return view('unsupported_browser');
    }
}
