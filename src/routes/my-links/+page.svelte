<script>
	// @ts-nocheck

	const urls = new Array(20).fill(0);

	const links = JSON.parse(localStorage.getItem('links') || []);

	/**
	 * @param {string} url
	 */
	function handleCopy(url) {
		console.log('copied', url);
	}
</script>

<div class="flex h-screen flex-col justify-between">
	<div class="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
		<div
			class="pointer-events-none absolute inset-x-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-400 to-primary-muted opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
				style="clip-path:polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			/>
		</div>
		<div
			class="pointer-events-none absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
			aria-hidden="true"
		>
			<div
				class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-red-300 to-orange-800 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
				style="clip-path:polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			/>
		</div>
	</div>
	<header class="sticky top-0 z-50 w-full bg-gradient-to-b from-white via-white/60 via-70%">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<a class="flex flex-row items-baseline" href="/"
					><h1 class="relative flex flex-row items-baseline text-2xl font-bold">
						<span class="sr-only">magi</span><span class="tracking-tight hover:cursor-pointer"
							>Magi<span class="text-primary">zip</span></span
						><sup class="absolute left-[calc(100%+.1rem)] top-0 text-xs font-bold text-black"
							>[BETA]</sup
						>
					</h1>
				</a>
			</div>
			<div>
				<div class=" flex items-center justify-center gap-x-6">
					<input
						type="text"
						placeholder="place your url in here"
						class="rounded-md px-3 py-2 w-96 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
					/>
					<a
						class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-primary"
						href="/sign-in">make it short</a
					>
				</div>
			</div>
		</nav>
	</header>
	<div class="flex justify-center h-full overflow-auto mb-7">
		<div class="mt-16 max-w-sm h-full flex flex-col gap-3">
			{#each links as url}
				<div class="flex w-full justify-center gap-8 mt-2">
					<p class="font-bold" style="margin-right: 20px;">URl shortener</p>
					<div class="flex items-center gap-4">
						<a target="_blank" href="magi.zip">magi.zip/HSUSKSDSk</a>
						<button on:click={() => handleCopy(url)}>
							<svg
								class="hover:cursor-pointer"
								width="15"
								height="15"
								viewBox="0 0 15 15"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								><path
									d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
									fill="currentColor"
									fill-rule="evenodd"
									clip-rule="evenodd"
								/></svg
							>
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<footer class="bottom-0 w-full bg-gray-900" aria-labelledby="footer-heading">
		<h2 id="footer-heading" class="sr-only">Footer</h2>
		<div class="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
			<div class="border-white/10 pt-8 md:flex md:items-center md:justify-between">
				<div class="flex space-x-6 md:order-2" />
				<p class="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
					© {new Date().getFullYear()} Fluma. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
</div>
