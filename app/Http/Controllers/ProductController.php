<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Http::get('https://dummyjson.com/products');

        return response($products);
    }

    public function search(Request $request)
    {
        $searchTerm = $request->input('q') ?? '';

        $products = Http::get("https://dummyjson.com/products/search?q=$searchTerm");

        return response($products);
    }
}
