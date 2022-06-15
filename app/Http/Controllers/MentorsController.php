<?php

namespace App\Http\Controllers;

use App\Models\Mentors;
use App\Models\MentorStudyDirections;

class MentorsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => []]);
    }

    /**
     * Create new Mentor
     *
     */
    public function createMentor()
    {
        $user_id = request('user_id');
        $mentor = new Mentors();

        $mentor->user_id = $user_id;
        $mentor->save();

        return response()->json(['message' => 'Successfully created!']);
    }

    /**
     * Get Mentors list
     *
     */
    public function getMentors()
    {
        return Mentors::all();
    }

    /**
     * Get mentor id
     *
     */
    public function getMentor($id)
    {
        return Mentors::find($id);
    }

    /**
     * Add study direction
     *
     */
    public function addStudyDirection()
    {
        $study_direction_id = request('study_direction_id');
        $years_experience = request('years_experience');
        $user = auth()->user();

        $mentorStudyDirections = new MentorStudyDirections();
        $mentorStudyDirections->mentor_id = $user->id;
        $mentorStudyDirections->study_direction_id = $study_direction_id;
        $mentorStudyDirections->years_experience = $years_experience;
        $mentorStudyDirections->save();

        return response()->json(['message' => 'Successfully added!']);
    }
}
