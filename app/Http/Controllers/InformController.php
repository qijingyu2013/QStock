<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Inform;
use Illuminate\Http\Request;
use Input;

class InformController extends Controller
{
    //交易动态
    const dtinform = 1;
    //茶知识
    const teaknowledge = 2;
    //茶文化
    const teaculture = 3;
    //茶藏品
    const teacollection = 4;
    //通知公告
    const tradeannouncement = 5;
    //交易规则
    const traderule = 6;

    /* 交易动态 start */
    /**
     * Get all Dt informs.
     *
     * @return JSON
     */
    public function getDtinforms(){
        $dtinforms = Inform::where('columnId', '=', self::dtinform)->get();
        return response()->success(compact('dtinforms'));
    }

    /**
     * Get system Dtinform referenced by id.
     *
     * @param int Dtinform ID
     *
     * @return JSON
     */
    public function getDtinformsShow($id)
    {
        $dtinform = Inform::find($id);

        return response()->success($dtinform);
    }

    /* 交易动态 end */

    /* 关于茶 start */
    /* 茶知识 start */
    /**
     * Get all Teaknowledge.
     *
     * @return JSON
     */
    public function getTeaknowledges(){
        $teaknowledges = Inform::where('columnId', '=', self::teaknowledge)->get();
        return response()->success(compact('teaknowledges'));
    }

    /**
     * Get system Teaknowledge referenced by id.
     *
     * @param int Teaknowledge ID
     *
     * @return JSON
     */
    public function getTeaknowledgesShow($id)
    {
        $teaknowledge = Inform::find($id);

        return response()->success($teaknowledge);
    }

    /* 茶知识 end */
    /* 茶文化 start */
    /**
     * Get all TeaCultures.
     *
     * @return JSON
     */
    public function getTeacultures(){
        $teacultures = Inform::where('columnId', '=', self::teaculture)->get();
        return response()->success(compact('teacultures'));
    }

    /**
     * Get system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function getTeaculturesShow($id)
    {
        $teaculture = Inform::find($id);

        return response()->success($teaculture);
    }

    /* 茶文化 end */
    /* 关于茶 end */

    /* 藏品展示 start */
    /**
     * Get all TeaCultures.
     *
     * @return JSON
     */
    public function getTeacollections(){
        $teacollections = Inform::where('columnId', '=', self::teacollection)->get();
        return response()->success(compact('teacollections'));
    }

    /**
     * Get system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function getTeacollectionsShow($id)
    {
        $teacollection = Inform::find($id);

        return response()->success($teacollection);
    }

    /* 藏品展示 end */

    /* 信息中心 start */
    /* 通知公告 start */
    /**
     * Get all TeaCultures.
     *
     * @return JSON
     */
    public function getTradeannouncements(){
        $tradeannouncements = Inform::where('columnId', '=', self::tradeannouncement)->get();
        return response()->success(compact('tradeannouncements'));
    }

    /**
     * Get system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function getTradeannouncementsShow($id)
    {
        $tradeannouncement = Inform::find($id);

        return response()->success($tradeannouncement);
    }

    /* 通知公告 end */

    /* 通知公告 start */
    /**
     * Get all TeaCultures.
     *
     * @return JSON
     */
    public function getTraderules(){
        $traderules = Inform::where('columnId', '=', self::traderule)->get();
        return response()->success(compact('traderules'));
    }

    /**
     * Get system TeaCulture referenced by id.
     *
     * @param int TeaCulture ID
     *
     * @return JSON
     */
    public function getTraderulesShow($id)
    {
        $traderule = Inform::find($id);

        return response()->success($traderule);
    }

    /* 通知公告 end */
    /* 信息中心 end */
}
