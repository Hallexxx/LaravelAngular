<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Category;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        return Course::with('teacher')->get();
    }

    public function show($id)
    {
        return Course::with('lessons')->findOrFail($id);
    }

    public function store(Request $request)
    {
        $course = Course::create($request->all());
        return response()->json($course, 201);
    }

    public function getCategories()
    {
        $categories = Category::with('courses')->get();
        return response()->json($categories);
    }

}
