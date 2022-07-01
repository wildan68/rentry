<template>
<div class="navbar w-full flex justify-around py-[14px] lg:py-[28px] items-center top-0 z-[100] bg-transparent px-[18px] lg:px-0" ref="navbar">
    <div class="lg:flex hidden justify-center items-center h-full flex-1 gap-[40px]">
        <div class="navbar-menu">
            Buying
        </div>
        <div class="navbar-menu">
            Renting
        </div>
        <div class="navbar-menu">
            Selling
        </div>
    </div>
    <div class="flex-1 flex lg:justify-center justify-start items-center">
        <img src="/logo.png" alt="logo" />
    </div>
    <div class="flex-1 lg:hidden flex justify-end">
        <button class="w-[48px] h-[48px] text-[24px] hover:bg-black-300" @click.prevent="toggleMenu">
            <i class="bi bi-list"></i>
        </button>
    </div>
    <div class="lg:flex hidden justify-center items-center h-full flex-1 gap-[40px]">
        <div class="navbar-menu">
            About Us
        </div>
        <div class="navbar-menu">
            Services
        </div>
        <div class="navbar-menu">
            Contact
        </div>
    </div>
    <div class="toggle-navbar fixed top-0 left-0 bottom-0 right-0 bg-black-100 z-50" v-if="this.isOpen">
        <div class="absolute top-10 right-10 cursor-pointer" @click.prevent="toggleMenu">
            <i class="bi bi-x-lg"></i>
        </div>
        <div class="flex flex-col gap-[20px] items-center justify-center h-full">
            <div class="navbar-menu">
                Buying
            </div>
            <div class="navbar-menu">
                Renting
            </div>
            <div class="navbar-menu">
                Selling
            </div>
            <div class="navbar-menu">
                About Us
            </div>
            <div class="navbar-menu">
                Services
            </div>
            <div class="navbar-menu">
                Contact
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        }
    },
    mounted() {

        window.addEventListener('scroll', () => {
         if (window.scrollY > 10) {   
                //  this.$refs.navbar.classList.add('fixed')
                this.$refs.navbar.classList.remove('bg-transparent')
                this.$refs.navbar.classList.add('bg-black-100/50')
                this.$refs.navbar.classList.add('sticky')
                this.$refs.navbar.classList.add('navbar-show')
            } else {
                // this.$refs.navbar.classList.remove('fixed')
                this.$refs.navbar.classList.remove('sticky')
                this.$refs.navbar.classList.remove('bg-black-100/50')
                this.$refs.navbar.classList.remove('navbar-show')
                this.$refs.navbar.classList.add('bg-transparent')
            }
        })

    }
}
</script>

<style scoped>
.navbar {
    transition: all 0.5s ease;
}

.navbar-menu {
    color: var(--white);
    cursor: pointer;
    position: relative;
    transition: all 1s ease;
}

.navbar-menu:hover {
    color: var(--gray-100);
}

.navbar-menu:hover::before {
    content: '';
    background-color: var(--green);
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -13px;
    display: block;
    animation: navbarMenuLine 0.5s ease-in-out;
}

@keyframes navbarMenuLine {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

.navbar-show {
    animation: navbarShow 1s ease-in-out;
}

@keyframes navbarShow {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
}


.toggle-navbar {
    animation: toggleNavbar 0.5s ease-in-out;
}

@keyframes toggleNavbar {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

@media (max-width: 1024px) {

}
</style>
