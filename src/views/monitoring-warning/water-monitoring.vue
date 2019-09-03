<template>
    <div class="water-monitoring">
        <div class="left-tree">
            <el-tree :data="data"
                     show-checkbox
                     node-key="id"
                    default-expand-all="true"
                     :props="defaultProps">
            </el-tree>
        </div>
        <div class="right-content"></div>
    </div>
</template>

<script>
export default {
  name: 'water-monitoring',
  data() {
    return {
      data: [
        {
          id: 1,
          label: '水利部综合事业局总水表',
          children: [
            {
              id: 4,
              label: '上善若水大厦市政水表',
              children: [
                {
                  id: 9,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 10,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 91,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 102,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 93,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 104,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 95,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 106,
                  label: '上善若水大厦市政1-1-1水表'
                }
              ]
            },
            {
              id: 4,
              label: '上善若水大厦市政水表',
              children: [
                {
                  id: 9,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 10,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 91,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 102,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 93,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 104,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 95,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 106,
                  label: '上善若水大厦市政1-1-1水表'
                }
              ]
            },
            {
              id: 4,
              label: '水务大厦市政水表',
              children: []
            },
            {
              id: 4,
              label: '水务大厦增压水表',
              children: []
            },
            {
              id: 4,
              label: '食堂、空调水表',
              children: [
                {
                  id: 9,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 10,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 91,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 102,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 93,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 104,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 95,
                  label: '上善若水大厦市政1-1-1水表'
                },
                {
                  id: 106,
                  label: '上善若水大厦市政1-1-1水表'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.water-monitoring {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  .left-tree {
    width: 280px;
    background-color: rgb(251, 251, 251);
    // padding: 0px;
    padding-top: 10px;
  }
  .right-content {
    flex: 1;
  }
}
</style>

<style lang="scss">
.el-tree {
  background-color: rgb(251, 251, 251);
}
</style>

