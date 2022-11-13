import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function MyFooter() {
  return (
    <footer aria-label="Site Footer" class="bg-gray-100 dark:bg-gray-900">
  <div
    class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
  >
    <div class="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
      <a
        class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 sm:p-3 lg:p-4"
        href="#MainContent"
      >
        <span class="sr-only">Back to top</span>
      </a>
    </div>

    <div class="lg:flex lg:items-end lg:justify-between">
      <div>
        <div
          class="flex justify-center text-teal-600 dark:text-teal-300 lg:justify-start"
        >
          <Link to={"/"}>
            <img
              className="img-fluid"
              src={logo}
              alt="just tickets"
              width="200px"
            /></Link>
        </div>

        <p
          class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 lg:text-left"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>
      </div>

      <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
        <ul
          class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
        >
          <li>
            <a
              class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="/"
            >
              About
            </a>
          </li>

          <li>
            <a
              class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="/"
            >
              Services
            </a>
          </li>

          <li>
            <a
              class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="/"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              class="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
              href="/"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <p
      class="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right"
    >
      Copyright &copy; 2022. All rights reserved.
    </p>
  </div>
</footer>

  );
}

export default MyFooter;
