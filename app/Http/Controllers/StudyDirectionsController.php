<?php

namespace App\Http\Controllers;

use App\Models\StudyDirections;
use Illuminate\Http\Request;

class StudyDirectionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => []]);
    }

    /**
     * Create new study direction
     *
     */
    public function createStudyDirection()
    {
        $title = request('title');

        $direction = new StudyDirections();
        $direction->title = $title;
        $direction->save();

        return response()->json(['message' => 'Successfully created!']);
    }

    /**
     * Get study directions
     *
     */
    public function getStudyDirections()
    {
        return StudyDirections::all();
    }

    /**
     * Get study direction
     *
     */
    public function getStudyDirection($id)
    {
        return StudyDirections::find($id);
    }
}
