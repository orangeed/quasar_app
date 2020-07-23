<!-- 分类 -->
<template>
  <div id="classification">
    <headImg title="分类" imgSrc="https://s1.ax1x.com/2020/06/24/NwAJHK.jpg"/>
    <orange-aside>
      <template>
        <div :class="$store.state.isMobile ? 'left-mobile' : 'left' ">
          <q-card class="my-card" basic flat>
            <q-card-section class="content">
              <q-splitter v-model="splitterModel">
                <template v-slot:before>
                  <div class="q-pa-md">
                    <q-tree
                      :nodes="simple"
                      node-key="label"
                      selected-color="primary"
                      :selected.sync="selected"
                      default-expand-all
                    />
                  </div>
                </template>

                <template v-slot:after>
                  <q-tab-panels
                    v-model="selected"
                    animated
                    transition-prev="jump-up"
                    transition-next="jump-up"
                  >
                    <q-tab-panel name="教程">
                      <div class="text-h4 q-mb-md">Welcome</div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                    </q-tab-panel>

                    <q-tab-panel name="Food">
                      <div class="text-h4 q-mb-md">Food</div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                    </q-tab-panel>

                    <q-tab-panel name="Room service">
                      <div class="text-h4 q-mb-md">Room service</div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                    </q-tab-panel>

                    <q-tab-panel name="Room view">
                      <div class="text-h4 q-mb-md">Room view</div>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
                    </q-tab-panel>
                  </q-tab-panels>
                </template>
              </q-splitter>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </orange-aside>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      splitterModel: 50,
      selected: "教程",
      simple: [
        {
          label: "生活",
          children: [
            {
              label: "软件",
              icon: "settings_applications"
            },
            {
              label: "软著",
              icon: "import_contacts"
            },
            {
              label: "Room view",
              icon: "photo"
            }
          ]
        },
        {
          label: "生活",
          children: [
            {
              label: "软件",
              icon: "settings_applications"
            },
            {
              label: "软著",
              icon: "import_contacts"
            },
            {
              label: "Room view",
              icon: "photo"
            }
          ]
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
#classification {
  .content {
    padding: 50px 40px;
  }
}
</style>
