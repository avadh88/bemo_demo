<?php

namespace App\Http\Controllers;

use App\column;
use App\task;
use Illuminate\Http\Request;

class taskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
            if($data['id'])
            {
                $task = task::find($data['id']);
                $task->column_id   = $data['column_id'];
                $task->title       = $data['title'];
                $task->description = $data['description'];
                $task->save();
            }
            else
            {
                $id   = task::create($data)->id;
            }
            
            // $data = task::find($id);
            $data = column::with('tasks')->get();
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
        task::where('id',$data['id'])->delete();
        $response['message'] = 'success';
        $response['code']    = 200;

        return json_encode($response);
    }

     /**
     * update task order.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateTaskOrder(Request $request)
    {
        $data      = json_decode($request->getContent(), true);
        try {
            if(isset($data['column_id']))
            {
                foreach($data['column_sort_data'] as $key => $value)
                {
                    $task = task::find($value);

                    $task->column_id = $data['column_id'];
                    $task->order    = $key;
                    $task->save();
                }
            }
            $data = column::with('tasks')->get();
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
     * get task details.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function gettaskdetails(Request $request)
    {
        $data      = json_decode($request->getContent(), true);   
        try {
            if(isset($data['id']))
            {
                $task = task::find($data['id']);
                $response['data']    = $task;
                $response['message'] = 'success';
                $response['code']    = 200;
            }
        }
        catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['code']    = 400;
        }
        return json_encode($response);
    }
}
