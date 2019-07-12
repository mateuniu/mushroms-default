<template>
    <div>
<!--TITLE CONTAINETR-->
        <transition name="title">
<!--loadTitleComponent is an expresion(bolean) with is switched from false
to true when Main.vue component is mounted. all of the child chomponents are running enter animations
on that pattern-->
          <section v-show="loadTitleComponent" class="title__container">
            <h1 class="title">{{ title }}</h1>
            <h2 class="subtitle">{{ subtitle }}</h2>
          </section>
        </transition>
<!--INSTAGRAM ICON CONTAINER-->
        <transition name="instagram-icon">
            <div v-show="loadTitleComponent">
                <a v-bind:href="instagramLink" target="_blank" class="instagram-link">
                    <section class="icon-instagram__container">
                        <span class="icon-instagram">i</span>
                    </section>
                </a>
           </div>
        </transition>
    </div>
</template>  
<script>
export default {
    name: 'Title',
    props: ['outputMenu'],
    data() {
        return {
            title: 'atlas',
            subtitle: 'grzybów',
            instagramLink: 'https://www.instagram.com/at_las_/',
            loadTitleComponent: false
        }
    },
// function with will switch loadTitleComponent from false to true 
// when Title.vue component will be mounted  
    mounted() {
        return this.loadTitleComponent = true
    }
}
</script>