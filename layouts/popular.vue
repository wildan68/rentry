<template>
<div class="popular w-full lg:h-screen h-auto relative lg:px-[130px] px-[18px] py-[40px] flex lg:flex-row items-center">
    <div class="bg-popular"></div>
    <div class="flex flex-col w-full overflow-x-hidden">
        <span class="font-[18px] text-green">Popular</span>
        <div class="flex justify-between items-center">
            <h2>Our Popular Residence</h2>
            <button class="hidden lg:flex gap-[10px] items-center text-[18px]">
                Explore All
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
        <div class="content flex lg:flex-row flex-col gap-[30px] z-30 mt-[48px] justify-center w-full">
            <div class="card-item w-full lg:w-[370px] h-[470px] bg-black-100 rounded-[14px] overflow-hidden" data-aos="flip-up">
                <div class="pict-card overflow-hidden h-[294px]">
                    <img src="/rumah2.png" class="w-full h-full object-cover" />
                </div>
                <div class="content-card p-[20px] gap-[20px] flex flex-col">
                    <div class="flex gap-[10px]">
                        <i class="bi bi-geo-alt-fill text-green"></i> Jakarta, Indonesia
                    </div>
                    <div class="flex gap-[25px]">
                        <div class="flex gap-[10px]">
                            <img src="/svg/bed.svg" /> 4 Bed
                        </div>
                        <div class="flex gap-[10px]">
                            <img src="/svg/frame.svg" /> 10x10 m
                        </div>
                        <div class="flex gap-[10px]">
                            <img src="/svg/square.svg" /> 1900 s
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <button class="btn-primary h-[54px]">Book Now</button>
                        <span class="font-[600] text-[20px]">
                            $5,200,000
                        </span>
                    </div>
                </div>
            </div>
            <div class="card-item w-full lg:w-[370px] h-[470px] bg-black-100 rounded-[14px] overflow-hidden" data-aos="flip-up">
                <div class="pict-card overflow-hidden h-[294px]">
                    <img src="/rumah3.png" class="w-full h-full object-cover" />
                </div>
                <div class="content-card p-[20px] gap-[20px] flex flex-col">
                    <div class="flex gap-[10px]">
                        <i class="bi bi-geo-alt-fill text-green"></i> Bandung, Indonesia
                    </div>
                    <div class="flex gap-[25px]">
                        <div class="flex gap-[10px]">
                            <img src="/svg/bed.svg" /> 3 Bed
                        </div>
                        <div class="flex gap-[10px]">
                            <img src="/svg/frame.svg" /> 9x9 m
                        </div>
                        <div class="flex gap-[10px]">
                            <img src="/svg/square.svg" /> 1800 s
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <button class="btn-ghost h-[54px]">Book Now</button>
                        <span class="font-[600] text-[20px]">
                            $4,300,000
                        </span>
                    </div>
                </div>
            </div>
            <div class="card-item w-full lg:w-[370px] h-[470px] bg-black-100 rounded-[14px] overflow-hidden" data-aos="flip-up">
                <div class="pict-card overflow-hidden h-[294px]">
                    <img src="/rumah4.png" class="w-full h-full object-cover" />
                </div>
                <div class="content-card p-[20px] gap-[20px] flex flex-col">
                    <div class="flex gap-[10px]">
                        <i class="bi bi-geo-alt-fill text-green"></i> Semarang, Indonesia
                    </div>
                    <div class="flex gap-[25px]">
                        <div class="flex gap-[10px]">
                            <img src="/svg/bed.svg" /> 6 Bed
                        </div>
                        <div class="flex gap-[10px]">
                            <img src="/svg/frame.svg" /> 12x12 m
                        </div>
                        <div class="flex gap-[10px]">
                            <img src="/svg/square.svg" /> 2400 s
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <button class="btn-ghost h-[54px]">Book Now</button>
                        <span class="font-[600] text-[20px]">
                            $7,000,000
                        </span>
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
.bg-popular {
    background-image: url('/bg_popular.png');
    background-size: cover;
    background-position: center;
    z-index: -1;
    width: 100%;
    position: absolute;
    height: 326px;
    bottom: 50px;
    left: 0;
    right: 0;
}
</style>
