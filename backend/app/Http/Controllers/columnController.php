<?php

namespace App\Http\Controllers;

use App\column;
use Illuminate\Http\Request;

class columnController extends Controller
{
     /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = column::with('tasks')->get();
        $response['message'] = 'success';
        $response['code']    = 200;
        $response['data']    = $data;

        return json_encode($response);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data      = json_decode($request->getContent(), true);
        
        try {
            $id   = column::create($data)->id;
            $data = column::find($id);
            $response['data']    = $data;
            $response['message'] = 'success';
            $response['code']    = 200;
        }
        catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['code']    = 400;
        }

        return json_encode($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $data      = json_decode($request->getContent(), true);
        column::where('id',$data['id'])->delete();
        $data = column::with('tasks')->get();
        $response['message'] = 'success';
        $response['code']    = 200;
        $response['data']    = $data;

        return json_encode($response);
    }
}
