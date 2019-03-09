import Vue from 'vue'
import {
  PERSONAL,
  FlowBacklog
} from '@/api/index.js'
import Router from 'vue-router'
import Approval from '@/pages/approval/Approval'
import Personnel from '@/pages/personnelsystem/Personnel'
import Workingprove from '@/pages/workingprove/Workingprove'
import Incomeprove from '@/pages/incomeprove/Incomeprove'
import Retreatflow from '@/pages/starRetreatflow/Retreatflow'
import EditbankAccount from '@/pages/bankaccount/Editbank'
import Myagency from '@/pages/myagency/Myagency'
import Searchpage from '@/pages/searchpage/Searchpage'

import QuestionCenter from '@/pages/questionCenter'
import StarNeworder from '@/pages/questionCenter/starNeworder'
import Myorder from '@/pages/questionCenter/Myorder'
import Agentorder from '@/pages/questionCenter/agentOrder'
import Todolist from '@/pages/questionCenter/todoList'
import Historyorder from '@/pages/questionCenter/historyOrder'

import main from '@/pages/main'
import page from '@/pages'

import news from '@/pages/otherFunc/news'

import newsInfo from '@/pages/otherFunc/news/info'
import recruit from '@/pages/otherFunc/recruit'
import recruitInfo from '@/pages/otherFunc/recruit/info'

import ratepaying from '@/pages/personalFunc/ratepaying'
import salary from '@/pages/personalFunc/salary'
import welfare from '@/pages/personalFunc/welfare'
import social from '@/pages/personalFunc/social'
import attendance from '@/pages/personalFunc/attendance'
import resume from '@/pages/personalFunc/resume'
import resumewt from '@/pages/personalFunc/resumewt/resumewt'
import resumewtJob from '@/pages/personalFunc/resumewt/components/resumewtJob'
import resumewtuser from '@/pages/personalFunc/resumewt/components/resumewtuser'
import resumewtteach from '@/pages/personalFunc/resumewt/components/resumewtteach'
import resumewtlang from '@/pages/personalFunc/resumewt/components/resumewtlang'
import resumewtcareer from '@/pages/personalFunc/resumewt/components/resumewtcareer'
import resumewtfamily from '@/pages/personalFunc/resumewt/components/resumewtfamily'
import resumewtUpload from '@/pages/personalFunc/resumewt/components/resumewtUpload'

import enterprise from '@/pages/workFunc/enterprise'
import subordinate from '@/pages/workFunc/subordinate'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/hrsscapp/',
  routes: [{
      path: '/',
      redirect: '/homepage'
    }, {
      path: '/',
      name: 'page',
      component: page,
      children: [{
        path: '/homepage',
        name: 'main',
        component: main,
      }, {
        path: '/news',
        name: 'news',
        component: news,
      }, {
        path: '/newsInfo',
        name: 'newsInfo',
        component: newsInfo,
      }, {
        path: '/recruit',
        name: 'recruit',
        component: recruit,
      }, {
        path: '/recruitInfo',
        name: 'recruitInfo',
        component: recruitInfo,
      }, {
        path: '/myagency',
        name: 'Myagency',
        component: Myagency,
      }, {
        path: '/ratepaying',
        name: 'ratepaying',
        component: ratepaying,
      }, {
        path: '/salary',
        name: 'salary',
        component: salary,
      }, {
        path: '/welfare',
        name: 'welfare',
        component: welfare,
      }, {
        path: '/social',
        name: 'social',
        component: social,
      }, {
        path: '/attendance',
        name: 'attendance',
        component: attendance,
      }, {
        path: '/resume',
        name: 'resume',
        component: resume,
      }, {
        path: '/enterprise',
        name: 'enterprise',
        component: enterprise,
      }, {
        path: '/subordinate',
        name: 'subordinate',
        component: subordinate,
      }, {
        path: '/resumewt',
        name: 'resumewt',
        component: resumewt
      }, {
        path: '/resumewtJob',
        name: 'resumewtJob',
        component: resumewtJob
      }, {
        path: '/resumewtuser',
        name: 'resumewtuser',
        component: resumewtuser
      }, {
        path: '/resumewtteach',
        name: 'resumewtteach',
        component: resumewtteach
      }, {
        path: '/resumewtlang',
        name: 'resumewtlang',
        component: resumewtlang
      }, {
        path: '/resumewtcareer',
        name: 'resumewtcareer',
        component: resumewtcareer
      }, {
        path: '/resumewtfamily',
        name: 'resumewtfamily',
        component: resumewtfamily
      }, {
        path: '/resumewtUpload',
        name: 'resumewtUpload',
        component: resumewtUpload
      }, {
        path: '/questionCenter',
        name: 'QuestionCenter',
        component: QuestionCenter,
      }]
    },
    // {
    //   path: '/',
    //   name: 'personnel',
    //   component: Personnel
    // },
    {
      path: '/approval',
      name: 'Approval',
      component: Approval
    },
    {
      path: '/retreatflow',
      name: 'Retreatflow',
      component: Retreatflow
    },
    {
      path: '/workingprove',
      name: 'Workingprove',
      component: Workingprove
    },
    {
      path: '/incomeprove',
      name: 'Incomeprove',
      component: Incomeprove
    },
    {
      path: '/editbankaccount',
      name: 'EditbankAccount',
      component: EditbankAccount
    },
    {
      path: '/searchpage',
      name: 'Searchpage',
      component: Searchpage
    },
    {
      path: '/starNeworder',
      name: 'StarNeworder',
      component: StarNeworder
    },
    {
      path: '/myorder',
      name: 'Myorder',
      component: Myorder
    },
    {
      path: '/agentorder',
      name: 'Agentorder',
      component: Agentorder
    },
    {
      path: '/todolist',
      name: 'Todolist',
      component: Todolist
    },
    {
      path: '/historyorder',
      name: 'Historyorder',
      component: Historyorder
    },
  ]
})

export default router;

router.beforeEach((to, from, next) => {
  // 判断是否存在用户信息；如果不存在则去请求用户信息
  // console.log(to, from, next)
  if (!sessionStorage.getItem('userInfo')) {

    if (!Vue.prototype.getCookie("token")) {
      var Request = GetRequest();
      var loginid = Request["loginid"];
      var stamp = Request["stamp"];
      var token = Request["token"];
      var tokens = sha1("yilihr" + loginid + stamp);
      if (tokens == token) {
        Vue.prototype.setCookie("token", "hrssc.yili.com");
        if ('localhost,192.168.137.1,10.1.90.190'.indexOf(window.location.hostname) >= 0)
          loginid = '00116513';
        Vue.prototype.setCookie("oprid", loginid);
      }
    }
    PERSONAL().then(res => {
      if (res.status == "0")
        sessionStorage.setItem("userInfo", JSON.stringify(res));
      getFlowBacklog();
      next();
    })
  } else {
    getFlowBacklog();
    next();
  }
})

function GetRequest() {
  var url = window.location.href; //获取url中"?"符后的字串
  // var url = '?loginid=10003031&stamp=123456&token=24b3af5abed21c13bd747089bc54f5bd786b4aa0';
  if ('localhost,192.168.137.1,10.1.90.190'.indexOf(window.location.hostname) >= 0)
    var url = '?loginid=00143669&stamp=123456&token=7fcc12f09fbf0aa0cad3a99e15b48b3c09b4c0ab';

  var theRequest = new Object();
  var strs = [];
  if (url.indexOf("?") != -1) {
    var str = url.substr(url.indexOf("?") + 1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}

// 获取脚标（目前就只有流程中心）
function getFlowBacklog() {
  if (!Vue.prototype.flowNums)
    Vue.prototype.flowNums = 0;
  FlowBacklog().then(res => {
    if (res.status == '0') {
      Vue.prototype.flowNums = res.count;
    }
  })
}
