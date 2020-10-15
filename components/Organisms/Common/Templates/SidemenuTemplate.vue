<template>
    <div class="sidebar">
        <!-- SPでずっと出てるやーつ -->
        <div class="sidebar-block-always">
            <slot name="always"></slot>
        </div>

        <!-- 開いたら出るやーつ -->
        <transition name="sidemenu">
            <div class="sidebar-block-only-open" :class="{ 'sidebar-block-only-open--opened': isOpen }">
                <div class="sidebar-block__only-open-menu">
                    <slot name="onlyOpen"></slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({})
export default class SideMenuTemplate extends Vue {
    @Prop() public isOpen!: boolean;
}
</script>
<style lang="stylus" scoped>
.sidebar {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    width: 23%;
    height: 100vh;
    background-color: $color-background-sidemenu;
    box-sizing: border-box;
    overflow: visible;
    padding: 0.5rem;
    z-index: $sidemenu;
}

.sidebar-block-always {
    width: 100%;
    display: none;
}

.sidebar-block-only-open {
    position: fixed;
    top: 0;
    left: 0%;
    width: 23%;
    height: 100vh;
    background: rgba(255, 255, 255, 0.96);
    box-sizing: border-box;
    overflow-y: scroll;
    transition: 0.5s all;
}

.sidebar-block__only-open-menu {
    position: relative;
    width: 200px;
    padding: 0 0 3rem 1rem;
    margin: 0 auto;
}

@media only screen and (max-width: 1180px) {
    .sidebar {
        width: 8%;
    }

    .sidebar-block-always {
        width: 100%;
        display: block;
    }

    .sidebar-block-only-open {
        position: fixed;
        top: 0;
        left: 8%;
        width: 0px;
        height: 100vh;
        background: rgba(255, 255, 255, 0.96);
        box-sizing: border-box;
        overflow-y: scroll;
        transition: 0.5s all;
    }

    .sidebar-block__only-open-menu {
        padding: 4rem 0 3rem 7rem;
        margin: 0;
    }

    .sidebar-block-only-open--opened {
        width: 350px;
    }
}

@media only screen and (max-width: 1000px) {
    .sidebar {
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
    }

    .sidebar-block-only-open {
        top: 60px;
        left: 0;
        width: 0;
        padding: 1.5rem 0 7rem;
    }

    .sidebar-block-only-open--opened {
        width: 300px;
        padding: 1.5rem 0.5rem 7rem;
    }

    .sidebar-block__only-open-menu {
        padding: 0rem 0 3rem 1rem;
    }

    .sidemenu-enter, .sidemenu-leave-to {
        width: 0px;
        opacity: 0;
    }
}
</style>
