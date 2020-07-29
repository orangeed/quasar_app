<!-- 文章详情 -->
<template>
  <div id="articleDeatil">
    <articleImg
      :title="article.title"
      :imgSrc="article.img"
      :createTime="article.createTime"
      :updateTime="article.updateTime"
      :tag="article.tag"
      :number="article.description.length"
    />
    <q-page-container>
      <q-page class="acticle" padding style="padding-top: 66px">
        <div class="left">
          <q-card class="my-card q-mr-lg" basic flat>
            <q-card-section :class="$store.state.isMobile ? 'img' : 'content'">
              <div v-html="article.content"/>
            </q-card-section>
          </q-card>
        </div>
        <div v-if="!$store.state.isMobile" class="right q-ml-lg">
          <!-- <q-page-sticky expand position="top-right"> -->
          <q-card>
            <div class="posi">
              <font-awesome-icon
                :icon="['fas','folder-open']"
                class="q-ml-lg q-mt-lg text-grey-9"
                style="font-size:20px"
              />
              <span class="q-ml-md">目录</span>
            </div>
            <q-card-actions vertical>
              <q-btn flat>Action 1</q-btn>
              <q-btn flat>Action 2</q-btn>
            </q-card-actions>
          </q-card>
          <!-- </q-page-sticky> -->
        </div>
      </q-page>
    </q-page-container>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      drawerLeft1: false,
      article: {
        id: 0,
        title: "这是第一篇文章",
        img: "https://s1.ax1x.com/2020/06/24/NwAQ39.md.jpg",
        createTime: "2020-07-16",
        updateTime: "2020-07-21",
        tag: "教程",
        description:
          "不知道是多少天了，在无数个难眠的夜晚，我辗转反侧，想有自己的台式电脑，最好是自己组装的，正好，今年刚刚毕业，又赶上了618活动，就开始买买买（虽然自己是在之前两天买的）！ ",
        // content: `<div class="post-content" id="article-container"><p><a href="https://s1.ax1x.com/2020/07/03/NjyaGV.jpg" data-fancybox="group" data-caption="logo" class="fancybox"><img alt="logo" class="loaded" src="https://s1.ax1x.com/2020/07/03/NjyaGV.jpg" data-ll-status="loaded"></a></p><p>毕业设计，经过磨难，终于写出了一个基本版本，我称他为1.0.0版本。这是一个电子商务网站，包括前台购买，后台管理系统，数据库和服务端。较为完整，就申请了个软著，后面也没有继续完善嘞。</p><h2 id="1-准备好要申请的软件"><a href="#1-准备好要申请的软件" class="headerlink" title="1 准备好要申请的软件"></a>1 准备好要申请的软件</h2><p>软著，全称软件著作权，这个简单的讲，就是拿一个软件去申请一个软件属于你的权利，所以软件是核心，最好是自己写的，或者是没有过的。反正就是不要抄袭别人的就好了。</p><h2 id="2-准备两份材料"><a href="#2-准备两份材料" class="headerlink" title="2 准备两份材料"></a>2 准备两份材料</h2><p>两份材料，包含了代码部分和软件设计书或者软件使用说明书。</p><p>代码部分，很简单，将你的程序软件的核心代码拷贝一份，放在一个文件下面，必要要有60页，其实这个很简单的，一个软件程序，动不动就是几千行上万行的。</p><p>软件设计书，或者软件使用说明书。前者，就是写你这个程序当时是怎么设计的，系统需求，系统设计，系统实现这几个部分是最重要的，还要写数据库是怎么设计的，包含了哪些表，表里面含有哪些字段。软件使用说明书，就是指这个软件是怎么使用的，你要一步一步的说明哪个功能模块怎么进入，怎么操作，会得到什么结果之类的。这个就比较详细，但是一般也没超过20页。</p><h2 id="3-准备合作开发合同"><a href="#3-准备合作开发合同" class="headerlink" title="3 准备合作开发合同"></a>3 准备合作开发合同</h2><p>如果你是个人开发的，就可以跳过这一步了，只有是合作开发的时候，才需要一个合作开发合同，这样是为了保证两个人的权利问题。防止以后扯皮或者其他什么问题。</p><h2 id="4-打印好以下的材料"><a href="#4-打印好以下的材料" class="headerlink" title="4 打印好以下的材料"></a>4 打印好以下的材料</h2><p>打印一份代码，打印一份软件设计书，打印一份合作开发合同，加起来也不贵，就几十元的样子。然后你需要去“中国版权保护中心”登录一下你的帐号进行填写软著申报登记（计算机软件著作权登记申请表），然后将这个填写好的登记表打印出来，在上面签字填写必要的信息就好了。最后将这些东西寄出去，地址是北京市西城区天桥南大街1号天桥艺术大厦A座三层。</p><h2 id="5-下面就是漫长的等待"><a href="#5-下面就是漫长的等待" class="headerlink" title="5 下面就是漫长的等待"></a>5 下面就是漫长的等待</h2><p>2019年12月24日，我登记了软著，并将材料寄出去了，然后就是等待了。</p><p>2020年2月11日，才开始受理登记。</p><p>2020年3月18日开始审查，领导审批。</p><p>2020年3月19日发证。</p><p>2020年4月15日收到快递，拿到了心念已久的软件著作权登记证书。</p><p><a href="https://pic2.zhimg.com/80/v2-521b111ecfc11b6ac08dd08c278c23b5_720w.jpg" data-fancybox="group" data-caption="软著申请流程图" class="fancybox"><img src="https://pic2.zhimg.com/80/v2-521b111ecfc11b6ac08dd08c278c23b5_720w.jpg" alt="软著申请流程图" data-ll-status="loaded" class="loaded"></a></p><p>时间稍微有点久，可能也是因为疫情的原因吧。</p><p>这是拿到的快递样子。</p><p><a href="https://pic1.zhimg.com/80/v2-a9396b2d8e249194f9eec4c86ebabc18_720w.jpg" data-fancybox="group" data-caption="快递图" class="fancybox"><img src="https://pic1.zhimg.com/80/v2-a9396b2d8e249194f9eec4c86ebabc18_720w.jpg" alt="快递图" data-ll-status="loaded" class="loaded"></a></p><p>这是里面的软件著作权登记证书。</p><p><a href="https://pic1.zhimg.com/80/v2-beed3eb8cde90342f51f9784cf90590c_720w.jpg" data-fancybox="group" data-caption="证书图" class="fancybox"><img src="https://pic1.zhimg.com/80/v2-beed3eb8cde90342f51f9784cf90590c_720w.jpg" alt="证书图" data-ll-status="loaded" class="loaded"></a></p><p>嗯….图片较为模糊，毕竟自己的老年人手机用了好久了，摄像头都被磨损了。害！将就看吧<del>~</del></p><p>有想申请软著的朋友，不同的地方可以问我哈，虽然我也只是申请了一次，但是会的会说的，不会的就….无能为力嘞！</p><p>就这样吧，以上！</p><p>原文链接:<br><a href="https://zhuanlan.zhihu.com/p/141529705" target="_blank" rel="noopener">知乎_橘子的分享</a><br><a href="https://mp.weixin.qq.com/s/s04atr0HO-axxHopW9_wVg" target="_blank" rel="noopener">微信公众号_橘子的分享</a></p></div>`
        content: `<div class="post-content" id="article-container"><p><a href="https://s1.ax1x.com/2020/07/03/NjyaGV.jpg" data-fancybox="group" data-caption="logo" class="fancybox"><img alt="logo" class="loaded" src="https://s1.ax1x.com/2020/07/03/NjyaGV.jpg" data-ll-status="loaded"></a></p>
<blockquote>
<p>如果我们有机会重返青春现场，一定发现，那个青春，与我们相携终身，不断怀念，惊鸿照影的青春有异，我们对它的怀念，是一种刻骨的高估。</p>
</blockquote>
<p>这是一篇碎碎念的帖子，没有以往的技术贴，也没有什么分享帖，有的只是碎碎念。</p>
<p>2016年入学，2020年毕业，时光荏苒….当然我也不想说这些屁话，废话。</p>
<p>不过还是要写写什么的。就算是给自己的大学给一个交代吧。</p>
<h2 id="关于兴趣与比赛"><a href="#关于兴趣与比赛" class="headerlink" title="关于兴趣与比赛"></a>关于兴趣与比赛</h2><p>大一，拥有了自己的第一台电脑。自己可劲折腾，各种软件都想尝试，各种系统也都试用，甚至是开始了拆机之旅。虽然对很多人说，那是一个非常简单的事情，可是在那个时候，我是真的第一次。</p>
<p>大一，我也开始比赛之旅，这条不归路还是被英语、日语专业等朋友带起来的，可以说他们是最大的共犯了。从此到大三，我才结束了我这罪恶的比赛之旅，没有什么大的成绩，小成绩不断，小打小闹的。现在想想，大一和大家在1402（应该是这个办公室？）写材料，初现稚嫩。后来大二，占用了赵文浩学长的办公室，和老邓、天正、凯捷等开始熬夜通宵写材料，开始熟练于心。大三，自己带了团队，但是结果不怎么美好，虽然也拿了奖。</p>
<h2 id="关于工作"><a href="#关于工作" class="headerlink" title="关于工作"></a>关于工作</h2><p>四年，参加了不少的工作，认识了不少的人，有的现在和我一样毕业了，有的待业中，有的走上了新的岗位，有的创业了。似乎大家都在各自的生活圈中混的风生水起，但是谁又知道谁的苦楚？前两天还有朋友让我陪他去寺庙祈福，赶走水逆。</p>
<p>有的创业了，几年下来，失败一个又一个项目，却就像打不倒的小强似得，也是越战越勇，继往开来，前段时间还聊到他们公司，问了基本情况，他们还招人的哟，有兴趣的可以问我，我帮忙推荐。有的始终坚持着自己创业梦想，未曾改变，坚持肯定是会有结果的！</p>
<p>其实，我想说的是，在大学多参加工作，认识的人也就会很多，会很有趣。同时在大四或者毕业后，项目经历或者说是工作经历是一个非常重要的指数。</p>
<h2 id="关于聚餐"><a href="#关于聚餐" class="headerlink" title="关于聚餐"></a>关于聚餐</h2><p>从小到大，聚散都习以为常。</p>
<p>毕业，这个也是经历了一次又一次，印象最深刻的还是高中毕业了吧。怎么形容当时的我呢，交际花吧？不对，应该是交际草！哈哈哈，和班级的每一个人都拥有很好的关系，还有旁边文科班以及楼下的几个理科班的同学。毕业当天，我的白色班级短袖上写满了同学的名字，似乎写下了名字，就能把他们留在了我身边一辈子。拍了很多的毕业照，都在我现在的那个坏掉的手机以及云空间里。还要找个时间，把手机的数据提取出来才行。</p>
<p>入夜，仿佛城市才开始醒来，一起到了酒店（听说星级很高，忘了名字），吃得少，喝的多，一箱酒，下肚，几趟厕所，坐在凳子上，目视前方，一言不发，明显我是醉了，只是还能思考而已，身体不太听使唤。隔壁桌子是其他学校，现场表白在一起。如此氛围，我也没有说出一些话的勇气，可能只是一份担不起的责任。第二天头晕目眩的参加了口语考试，还好遇到了自己的英语老师。</p>
<p>而现在，大学毕业，仿佛缺了点什么，自己工作，同时也不想在喝很多的酒，更加不像因为分别而伤心。以前的我，总是在别人走后我在选择离开，这样的话，他们就看不到我离开的背影，而是我看到大家离开的背影。这次毕业，我选择了不参加毕业聚餐，拍完毕业照，直接溜掉。不想因为分别而感到一丝丝心情的波动，同样，大四一直都在外面，离开校园很久，感觉很多时候，很多话题都不在了。</p>
<h2 id="关于爱"><a href="#关于爱" class="headerlink" title="关于爱"></a>关于爱</h2><p>别问！！！问就是没有，大学四年，没有谈过。</p>
<p>自从和前任分手后，自己感觉对于这个爱情来说，我认为是一份责任，我现在没有物质担得起，选择不谈，但是很多时候也是很羡慕别人。有和别人以开玩笑的形式聊到这个话题，聊着聊着，我就不敢再说了。别问，问就是没钱陪你high爆整个青春。 </p>
<h2 id="关于想说的话"><a href="#关于想说的话" class="headerlink" title="关于想说的话"></a>关于想说的话</h2><p>想说的话很多很多…..</p>
<p>eg:</p>
<p>感谢周志丹老师、王绍卜老师等很多老师在大学里面对我的照顾。</p>
<p>劝诫学弟学妹们，多多参加和自己未来工作相关或者专业相关的实习，大公司最好。</p>
<p>希望学弟学妹们，还是多谈谈恋爱吧，别给自己留下遗憾，千万不要学我！！！</p>
<p>希望学弟学妹们，多多参加比赛以及社会实践等等，增加自己的见识，真的！！！同时练好基础！不然你到时候后悔莫及！</p>
<p>以上！！！来自一个电子商务专业，却是程序员的2020届毕业生亲身所述。</p>
<p>原文链接:<br><a href="https://zhuanlan.zhihu.com/p/147359841" target="_blank" rel="noopener">知乎_橘子的分享</a><br><a href="https://mp.weixin.qq.com/s/qGhbt96XDQSYSOJoJ40jyQ" target="_blank" rel="noopener">微信公众号_橘子的分享</a></p>
</div>`
      }
    };
  },
  computed: {},
  created() {
    console.log(this.article.description.length);
  },
  mounted() {
    // document.querySelectorAll("img").style.width = "200px";
    // console.log(
    //   'document.querySelectorAll("img")',
    //   document.querySelectorAll("img")
    // );
    // if (this.$store.state.isMobile) {
    //   const img = document.querySelectorAll("img");
    //   img.forEach(v => {
    //     v.width = 220;
    //   });
    // }
  },
  watch: {},
  methods: {},
  components: {}
};
</script>

<style  lang="scss">
#articleDeatil {
  background: url("https://s1.ax1x.com/2020/07/04/Nv2rxP.jpg");
  background-size: cover;
  background-attachment: fixed;

  .acticle {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    padding: 2rem 15px;
    max-width: 1200px;
    flex-wrap: wrap;
    .my-card {
      .content {
        padding: 50px 40px;
        width: 100%;
        h2 {
          font-size: 30px;
          font-weight: 600;
        }
        a {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .img {
        padding: 50px 40px;
        width: 100%;
        height: 100%;
        p {
          margin: 0;
        }
        h2 {
          font-size: 20px;
          font-weight: 600;
        }
        img {
          width: 210px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 20px;
        }
      }
    }
    .left {
      flex: 3;
    }
    .right {
      flex: 1;
    }
  }
}
</style>
