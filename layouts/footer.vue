<template>
<div class="py-[100px] px-[18px] lg:px-[130px] flex flex-col w-full">
    <div class="flex lg:flex-row flex-col justify-between w-full lg:gap-0 gap-[58px]">
        <div class="flex-1 flex-col flex lg:px-[30px] px-0">
            <h5 class="title">More Renty</h5>
            <div class="mt-[30px] flex flex-col gap-[20px]">
                <a href="" class="text-gray-200 text-[16px]">
                    FAQ
                </a>
                <a href="" class="text-gray-200 text-[16px]">
                    About Us
                </a>
                <a href="" class="text-gray-200 text-[16px]">
                    Contact Us
                </a>
                <a href="" class="text-gray-200 text-[16px]">
                    Feedback
                </a>
                <a href="" class="text-gray-200 text-[16px]">
                    Join Our Community
                </a>
                <a href="" class="text-gray-200 text-[16px]">
                    Agent Support
                </a>
            </div>
            <div class="mt-[70px] flex gap-[26px]">
                <span class="text-[24px] text-gray-300">
                    <i class="bi bi-instagram"></i>
                </span>
                <span class="text-[24px] text-gray-300">
                    <i class="bi bi-facebook"></i>
                </span>
                <span class="text-[24px] text-gray-300">
                    <i class="bi bi-linkedin"></i>
                </span>
                <span class="text-[24px] text-gray-300">
                    <i class="bi bi-twitter"></i>
                </span>
            </div>
            <div class="mt-[70px] text-gray-200 text-[12px]">Renty Group is committed to ensuring digital accessibility for individuals with disabilities. We are
                continuously working to improve the accessibility of our web experience for everyone.</div>
        </div>
        <div class="flex-1 flex-col flex lg:px-[30px] px-0">
            <h5 class="title">Stay connected</h5>
            <span class="mt-[30px] lg:whitespace-pre-line text-gray-200">Sign up for inspiration for nourishing your body, mind and
                shine from inside. Added bonus: you'll get 10% off your first
                Renty order.
            </span>
            <div class="flex flex-col gap-[20px] mt-[30px]">
                <input type="text" placeholder="Email Address" />
                <div class="flex justify-end">
                    <button class="btn-primary h-[45px]">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    <div class="mt-[30px] h-[1px] bg-black-200 lg:mx-[30px]"></div>
    <div class="flex justify-between mt-[40px] text-gray-200 px-0 lg:flex-row flex-col gap-[10px] lg:px-[30px]">
        <span>UI By ©uihut.com 2022. All Rights Reserved.</span>
        <div class="flex lg:gap-[30px] lg:flex-row flex-col gap-[10px]">
            <span>Terms of Use</span>
            <span>Terms & Privacy</span>
        </div>
    </div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.title {
    position: relative;
}

.title::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 87px;
    height: 2px;
    background-color: var(--green);
}

input[type=text] {
    background-color: transparent;
    color: var(--gray-300);
    border-bottom: 1px solid var(--black-200);
    padding: 13px 0 13px 0;
}
</style>
