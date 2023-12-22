import { navbarLogo } from "../assets"

export default function Footer() {
    return (
        <div className="snap-start flex flex-col justify-end" style={{
            scrollSnapAlign: "start",
            backgroundColor: "#1C1C1C"
        }}>
            <footer class="bg-transparent pt-3">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <img src={navbarLogo} class="h-32 w-40 mr-3" alt="navbarLogo" />
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow me</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li>
                                        <a href="https://www.instagram.com/wohoj_yet_again/" target="_blank" class="hover:underline ">Instagram</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/WahajJaved20" target="_blank" class="hover:underline">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/wahaj-javed-k200208/" target="_blank" class="hover:underline">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Meet the Developer</h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <p class="hover:underline ">Wahaj Javed</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    )
}