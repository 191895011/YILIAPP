<template>
  <div>
    <div class="func-dev">
      <div class="func-title" style="background:rgba(88,181,48,1);">
        <span>个人应用</span>
      </div>
      <div class="func-icon" ref="funcMe" @scroll="handelScroll">
        <ul>
          <li v-for="f in personal" :key="f.id" @click="handleMenusClick(f.url)">
            <img :src="require('@/assets/icon/'+f.name+'.png')">
            <span>{{f.name}}</span>
          </li>
        </ul>
      </div>
      <div v-show="pMore" class="func-more">
        <img :src="require('@/assets/img/pMore.png')" @click="handleClickScroll">
      </div>
    </div>
    <div class="func-dev">
      <div class="func-title" style="background:rgba(0,134,205,1);">
        <span>工作应用</span>
      </div>
      <div class="func-icon" ref="funcWork" @scroll="handelScroll">
        <ul>
          <li v-for="f in work" :key="f.id" @click="handleMenusClick(f.url)">
            <img :src="require('@/assets/icon/'+f.name+'.png')">
            <span>{{f.name}}</span>
          </li>
        </ul>
      </div>
      <div v-show="wMore" class="func-more">
        <img :src="require('@/assets/img/wMore.png')" @click="handleClickScroll">
      </div>
    </div>
    <div class="func-dev">
      <div class="func-title" style="background:rgba(245,166,35,1);">
        <span>其他应用</span>
      </div>
      <div class="func-icon">
        <ul>
          <li v-for="f in other" :key="f.id" @click="handleMenusClick(f.url)">
            <img :src="require('@/assets/icon/'+f.name+'.png')">
            <span>{{f.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { FounctionList } from "@/api/index.js";
export default {
  data() {
    return {
      func: [
        {
          id: 1,
          name: "个人信息",
          url: "resume"
        },
        {
          id: 2,
          name: "我的工资",
          url: "salary"
        },
        {
          id: 3,
          name: "我的社保",
          url: "social"
        },
        {
          id: 4,
          name: "我的福利",
          url: "welfare"
        },
        {
          id: 5,
          name: "我的考勤",
          url: "attendance"
        },
        {
          id: 6,
          name: "我的个税",
          url: "ratepaying"
        },
        {
          id: 7,
          name: "利益关系",
          url: ""
        },
        {
          id: 8,
          name: "流程中心",
          url: "myagency"
        },
        {
          id: 9,
          name: "问题中心",
          url: "questionCenter"
        },
        {
          id: 10,
          name: "我的下属",
          url: "subordinate"
        },
        {
          id: 11,
          name: "工作信息",
          url: "enterprise"
        },
        {
          id: 12,
          name: "招贤纳士",
          url: "recruit"
        },
        {
          id: 13,
          name: "新闻中心",
          url: "news"
        }
      ],
      personal: [],
      pMore: true,
      work: [],
      wMore: true,
      other: [],
      funcList: []
    };
  },
  methods: {
    handleMenusClick(url) {
      // 临时取掉权限
      if (
        "00116513".indexOf(
          JSON.parse(sessionStorage.getItem("userInfo")).EMPLID
        ) >= 0 ||
        "recruit,news".indexOf(url) >= 0
      ) {
        if (url) {
          this.$router.push({ path: url });
        }
      }
    },
    handelScroll(e) {
      e.target.nextElementSibling.className = "func-more ";
      if (
        e.target.clientWidth + e.target.scrollLeft >=
        e.target.scrollWidth - 10
      )
        e.target.nextElementSibling.className += "transform";
    },
    handleClickScroll(e) {
      let sc = e.target.parentElement.previousElementSibling;
      if (sc.clientWidth + sc.scrollLeft >= sc.scrollWidth - 10) {
        if (sc.clientWidth > sc.scrollLeft) {
          this.scrollNumTo(sc, 0);
        } else {
          this.scrollNumTo(sc, sc.scrollLeft - sc.clientWidth);
        }
      } else {
        let l = sc.clientWidth + sc.clientWidth + sc.scrollLeft;
        if (sc.scrollWidth < l) {
          this.scrollNumTo(sc, sc.scrollWidth - sc.clientWidth);
        } else {
          this.scrollNumTo(sc, sc.scrollLeft + sc.clientWidth);
        }
      }
    },
    // 平滑滚动
    scrollNumTo(sc, to) {
      if (sc.scrollLeft > to) {
        if (sc.scrollLeft - 10 <= to) {
          sc.scrollLeft = to;
          return;
        }
        sc.scrollLeft -= 10;
      } else if (sc.scrollLeft < to) {
        if (sc.scrollLeft + 10 >= to) {
          sc.scrollLeft = to;
          return;
        }
        sc.scrollLeft += 10;
      } else {
        return;
      }
      let _this = this;
      setTimeout(function() {
        _this.scrollNumTo(sc, to);
      }, 10);
    },
    handelShow() {
      this.funcList = JSON.parse(sessionStorage.getItem("funcList"));
      this.personal = this.func.filter(i => i.id <= 7);
      this.work = this.func.filter(i => i.id <= 11 && i.id > 7);
      this.other = this.func.filter(i => i.id > 11);
      this.pMore = this.personal.length * 80 > this.$refs.funcMe.clientWidth;
      this.wMore = this.work.length * 80 > this.$refs.funcWork.clientWidth;
    },
    getFuncList() {
      if (!sessionStorage.getItem("funcList")) {
        FounctionList().then(res => {
          if (res.status == "0") {
            let f = [];
            res.JsonData.forEach(e => {
              f.push(this.func.filter(i => i.id == e.COTEGORY_ID)[0]);
            });
            sessionStorage.setItem("funcList", JSON.stringify(f));
            this.handelShow();
          } else {
            this.$messagebox.alert(res.msg);
          }
        });
      } else {
        this.handelShow();
      }
    }
  },
  created() {},
  mounted() {
    this.getFuncList();
  }
};
</script>

<style scoped>
.func-dev {
  /* width: 100%; */
  margin: 0;
  height: 1.6rem;
  border-radius: 0.1rem;
  background-color: #fff;
  margin-top: 0.2rem;
  overflow: hidden;
}
.func-dev .func-title {
  float: left;
  width: 0.8rem;
  height: 1.44rem;
  border-radius: 0.1rem 0 0 0.1rem;
  padding-top: 0.16rem;
}
.func-dev .func-title span {
  display: block;
  width: 0.26rem;
  height: 1.28rem;
  font-size: 0.26rem;
  font-family: PingFang-SC-Bold;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 0.32rem;
  margin: 0 auto;
}
.func-icon {
  float: left;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  width: calc(100% - 1.5rem);
}
.func-dev ul {
  height: 1.6rem;
  display: inline-block;
}
.func-dev ul li {
  list-style: none; /* 将默认的列表符号去掉 */
  padding: 0; /* 将默认的内边距去掉 */
  margin: 0; /* 将默认的外边距去掉 */
  display: inline-block;
  text-align: center;
  width: 1.5rem;
  height: 1.6rem;
}
.func-dev ul li img {
  width: 0.5rem;
  height: 0.5rem;
  display: block;
  margin: 17px auto 0;
}
.func-dev ul li span {
  height: 0.34rem;
  font-size: 0.24rem;
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(153, 153, 153, 1);
  line-height: 0.34rem;
}
.func-more {
  width: 0.22rem;
  float: right;
  padding: 0 0.28rem 0 0;
  height: 1.6rem;
  line-height: 1.6rem;
}
.func-more img {
  width: 16px;
  height: 16px;
  /* margin: 32px 0 0 5px; */
}
.transform.func-more img {
  transform: rotate(180deg);
}
</style>