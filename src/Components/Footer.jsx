import { Github, Linkedin, SquareDashedKanban, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
     return (
          <>
          <footer class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
          <div className='flex'>

        <a href="#">
          <SquareDashedKanban className='h-7 w-7 text-blue-500'/>
        </a><span className='ml-2 text-xl font-bold text-white'>DeepCode</span>
          </div>

        <p class="text-sm text-gray-600 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

        <div class="flex -mx-2">
            <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                <Twitter/>
            </a>

            <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
               <Linkedin/>
            </a>

            <a href="#" class="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                <Github/>
            </a>
        </div>
    </div>
</footer>
          </>
     )
}

export default Footer
