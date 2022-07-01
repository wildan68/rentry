<template>
<div class="popular w-full lg:h-screen h-auto relative lg:px-[130px] px-[18px] py-[40px] bg-black-300 flex lg:flex-row flex-col lg:items-center lg:gap-0 gap-[58px]">
    <div class="flex-1 flex flex-col">
        <span class="font-[18px] text-green">Benefits</span>
        <h2 class="mt-[15px]">Why Choose us</h2>
        <span class="mt-[20px] font-[16px] text-gray-200 whitespace-pre-line">Renty is a trustworthy developer in the real estate
            business. He has developed a reputation for trust and will
            have that reputation for years to come.
        </span>
        <div class="mt-[40px] flex flex-col gap-[35px]">
            <div class="flex gap-[14px]">
                <img src="/svg/developer.svg">
                Trusted Developer
            </div>
            <div class="flex gap-[14px]">
                <img src="/svg/commisions.svg">
                No Commisions
            </div>
            <div class="flex gap-[14px]">
                <img src="/svg/safe.svg">
                A safe and Trustworthy
            </div>
            <div class="flex gap-[14px]">
                <img src="/svg/home-protect.svg">
                Buy with Confidence
            </div>
        </div>
    </div>
    <div class="flex flex-1">
        <div class="w-full lg:w-[569px] h-[404px] lg:h-[661px] border-[20px] rounded-tl-[184px] lg:rounded-tl-[284px] rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px] border-black-200/50 overflow-hidden relative">
            <img src="/rumah6.png" alt="rumah1" class="object-cover w-full h-full" />
            <div class="h-[100px] lg:h-[140px] w-full px-[15px] lg:px-[29px] absolute bottom-[15px] lg:bottom-[33px]">
                <div class="h-full w-full backdrop-filter rounded-[22px] flex p-[10px] lg:p-[30px] items-center gap-[5px] lg:gap-[20px] justify-around">
                    <div class="flex flex-col gap-[5px] lg:gap-[15px]">
                        <span class="text-[14px] lg:text-[34px] font-[400]">70+ Employee</span>
                        <div class="flex gap-[5px] lg:gap-[10px] items-center">
                            <img src="/svg/star.svg" class="lg:w-auto lg:h-auto w-[12px] h-[14px]" />
                            <span class="text-[12px] lg:text-[20px]">
                                4.9
                            </span>
                            <span class="text-[10px] lg:text-[16px] text-gray-100">
                                (6.4k reviews)
                            </span>
                        </div>
                    </div>
                    <div class="flex employee-list">
                        <div class="lg:w-[64px] lg:h-[64px] w-[48px] h-[48px] overflow-hidden rounded-full border-[3px] border-white">
                            <img src="/orang1.png" class="object-cover w-full h-full" />
                        </div>
                        <div class="lg:w-[64px] lg:h-[64px] w-[48px] h-[48px] overflow-hidden rounded-full border-[3px] border-white">
                            <img src="/orang2.png" class="object-cover w-full h-full" />
                        </div>
                        <div class="lg:w-[64px] lg:h-[64px] w-[48px] h-[48px] overflow-hidden rounded-full border-[3px] border-white">
                            <img src="/orang3.png" class="object-cover w-full h-full" />
                        </div>
                        <div class="lg:w-[64px] lg:h-[64px] w-[48px] h-[48px] overflow-hidden rounded-full border-[3px] border-white">
                            <img src="/orang4.png" class="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.employee-list>div {
    margin-right: -30px;
}

.backdrop-filter {
    -webkit-backdrop-filter: blur(3px);
    backdrop-filter: blur(3px);
}

@media (max-width: 1024px) {
    .employee-list>div {
        margin-right: -20px;
    }
}
</style>
