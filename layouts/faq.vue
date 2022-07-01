<template>
<div class="flex flex-col py-[30px] items-center bg-black-300 h-auto w-full lg:px-0 px-[18px]">
    <h2 class="text-center">FAQ’s – Frequently Asked Questions</h2>
    <span class="text-gray-100 mt-[20px] text-[16px] lg:whitespace-pre-line text-center">As you might imagine, real estate agents field quite a few questions every day. People are
        naturally curious, and it’s an agent’s job to guide.</span>
    <div class="flex flex-col mt-[40px] lg:mt-[120px] gap-[30px] w-full lg:w-[970px] items-center">
        <div v-for="(data, i) in faqData" :key="i" class="faq-item" :id="active == i ? 'active' : 0" @click.prevent="active != i ? active = i : active = -1">
            <div class="w-full flex justify-between items-center">
                <h4 class="text-[14px] lg:text-[24px]">{{ data.title }} </h4>
                <i class="bi bi-x-lg z-20 faq-item-icon lg:text-[24px] text-[14px]" v-if="active == i" @click.prevent="close"></i>
                <i class="bi bi-plus-lg faq-item-icon lg:text-[24px] text-[14px]" v-else></i>
            </div>
            <span class="w-full whitespace-pre-line text-[14px] text-gray-100" v-if="active == i">{{ data.caption }}
            </span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            active: -1,
            faqData: [{
                    title: 'How can I build equity into my house?',
                    caption: `You can build equity in three ways. First (and easiest) is from market
                    appreciation. Second, when making your monthly mortgage payment, try to send
                    a little bit more.`
                },
                {
                    title: 'How big is an acre?',
                    caption: `You can build equity in three ways. First (and easiest) is from market
                    appreciation. Second, when making your monthly mortgage payment, try to send
                    a little bit more.`
                },
                {
                    title: 'What are closing costs?',
                    caption: `You can build equity in three ways. First (and easiest) is from market
                    appreciation. Second, when making your monthly mortgage payment, try to send
                    a little bit more.`
                },
                {
                    title: 'What is Title Insurance?',
                    caption: `You can build equity in three ways. First (and easiest) is from market
                    appreciation. Second, when making your monthly mortgage payment, try to send
                    a little bit more.`
                },
            ]
        }
    },
    methods: {
        close() {
            this.active = -1;
        },
    }
}
</script>

<style scoped>
.faq-item {
    border: 1px solid var(--green);
    border-radius: 8px;
    padding: 24px 56px 24px 56px;
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    cursor: pointer;
    align-items: center;
    width: 100%;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
}

.faq-item:hover {
    background-color: var(--green);
    color: var(--white);
}

.faq-item#active {
    background-color: var(--green);
    color: var(--white);
    transition: all 0.5s ease-in-out;
    animation: openActive 0.5s ease-in-out;
}

@keyframes openActive {
    0% {
        height: auto;
    }

    100% {
        height: auto;
    }

}

.faq-item-icon {
    animation: iconAnim 0.5s ease-in-out;
}

@keyframes iconAnim {
    0% {
        transform: rotate(-180deg);
    }

    100% {
        transform: rotate(0deg);
    }
}

@media (max-width: 1024px) {
    .faq-item {
        border-radius: 8px;
        padding: 14px 26px 14px 26px;
        gap: 8px;
    }
}
</style>
