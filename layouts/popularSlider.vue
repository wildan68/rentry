<template>
<div class="popular w-full lg:h-screen h-auto relative lg:px-[130px] px-[18px] py-[40px]">
    <div class="flex flex-col flex-1">
        <span class="font-[18px] text-green">Popular</span>
        <div class="flex justify-between">
            <h2 class="lg:whitespace-pre-line">Homes for Renty News
                And Stories</h2>
            <div class="hidden lg:flex h-[10em] items-center justify-end px-[10%]">
                <div class="flex justify-around gap-[10px]">
                    <button @click.prevent="prev" slot="button-prev" class="swiper-button-prev w-[50px] h-[50px] rounded-full flex items-center justify-center border border-white hover:bg-white hover:text-black-100">
                        <i class="bi bi-chevron-left"></i>
                    </button>
                    <button @click.prevent="next" slot="button-next" class="swiper-button-next w-[50px] h-[50px] rounded-full flex items-center justify-center border border-white hover:bg-white hover:text-black-100">
                        <i class="bi bi-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="swiper overflow-hidden flex h-[460px] mt-[55px]" v-swiper:mySwiper="swiper">
            <div class="swiper-wrapper flex items-center">
                <div class="swiper-slide slide-item relative" v-for="(data, i) in rumah" :key="i" @mouseover.prevent="hoverItem(i)" @mouseout.prevent="blurItem(i)">
                    <img :src="data.src" class="object-cover w-full h-full" />
                    <div class="bg-black-100/50 gap-[15px] text-white flex-col justify-center items-center absolute top-0 right-0 left-0 bottom-0 hidden" ref="slideItem">
                        <span class="text-[28px] font-[600]">{{ data.title }}</span>
                        <span>{{ data.street }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            swiper: {
                slidesPerView: 3,
                spaceBetween: 20,
                breakpoints: {
                    768: {
                        slidesPerView: 1,
                    }
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                loop: true,
            },
            rumah: [
                {
                    src: '/rumah1.png',
                    title: 'Editorial House',
                    street: 'JL. Kencana oke. No2 universen',
                },{
                    src: '/rumah2.png',
                    title: 'Editorial House 2',
                    street: 'JL. Kencana oke. No2 universen',
                },{
                    src: '/rumah3.png',
                    title: 'Editorial House 3',
                    street: 'JL. Kencana oke. No2 universen',
                },{
                    src: '/rumah4.png',
                    title: 'Editorial House 4',
                    street: 'JL. Kencana oke. No2 universen',
                },
            ]
        }
    },
    methods: {
        next() {
            this.active = this.active + 1;
            if (this.active > 2) {
                this.active = 0;
            }
        },
        prev() {
            this.active = this.active - 1;
            if (this.active < 0) {
                this.active = 2;
            }
        },
        hoverItem(i) {
            this.$refs.slideItem[i].classList.remove('hidden');
            this.$refs.slideItem[i].classList.add('flex');
        },
        blurItem(i) {
            this.$refs.slideItem[i].classList.remove('flex');
            this.$refs.slideItem[i].classList.add('hidden');
        }
    },
    async mounted() {

    }
}
</script>

<style scoped>
.slide-item {
    height: 394px;
    overflow: hidden;
    border-radius: 20px;
    transition: all 0.5s ease-in-out;
}

.slide-item#active {
    height: 454px;
    transition: all 0.5s ease-in-out;
}

.swiper {
    width: 100%;
    overflow: hidden;
}

.swiper-slide-active {
    height: 454px;
    transition: all 0.5s ease-in-out;
}

:root {
    --swiper-navigation-size: 50px;
    /*
  --swiper-navigation-color: var(--swiper-theme-color);
  */
}

.swiper-button-prev,
.swiper-button-next {
    margin-top: 0;
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
}

.swiper-button-prev.swiper-button-hidden,
.swiper-button-next.swiper-button-hidden {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
}

.swiper-navigation-disabled .swiper-button-prev,
.swiper-navigation-disabled .swiper-button-next {
    display: none !important;
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-family: swiper-icons;
    font-size: 24px;
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
}

.swiper-button-prev,
.swiper-rtl .swiper-button-next {
    left: 10px;
    right: auto;
}

.swiper-button-next,
.swiper-rtl .swiper-button-prev {
    right: 10px;
    left: auto;
}

.swiper-button-lock {
    display: none;
}
</style>
