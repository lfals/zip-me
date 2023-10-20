<script>
	// @ts-nocheck
	import ShortUniqueId from "short-unique-id";



		async function shortLink(event) {
			const shortened = {
				url: '',
				name: ''
			};

			event.preventDefault();
			const url = event.target[0].value;
			await fetch(url)
				.then(async (res) => {
					const parser = new DOMParser();
					const text = await res.text();
					const html = parser.parseFromString(text, 'text/html');
					const pageTitle = html.getElementsByTagName('title')[0].innerText;
					shortened.name = pageTitle;
				})
				.catch((err) => {
					shortened.name = new URL(url).hostname;
				});

			const uid = new ShortUniqueId({ length: 10 });

			const hash = uid.rnd()

			shortened.url =  `https://magi.zip/${hash}`;

			const response = await fetch('/api/hash', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					hash,
					url,
				})
			}).catch((err) => {
				console.log(err)
			});

			await response.json().then((data) => {
				console.log(data)
			})

			console.log(shortened)


			navigator.clipboard.writeText(shortened.url);

			

		};
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
			<div class="flex items-center gap-4">
				<a
					class="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-primary"
					href="/my-links"
					>my links <span aria-hidden="true">→</span>
				</a>
			</div>
		</nav>
	</header>
	<div class="-mt-16">
		<div class="flex items-center justify-center overflow-auto">
			<div class="relative isolate px-6 py-14 lg:px-8">
				<div class="max-w-2xl">
					<div class="hidden sm:mb-8 sm:flex sm:justify-center">
						<div
							class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
						>
							make it short
						</div>
					</div>
					<div class="text-center">
						<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
							The last shortener <br /> you'll ever need!
						</h1>
						<p class="mt-6 text-lg leading-8 text-gray-600">It's simple as that.</p>
						<form class="mt-10 flex items-center justify-center gap-x-6" on:submit={shortLink}>
							<input
								type="url"
								placeholder="place your url in here"
								class="rounded-md px-3 py-2 w-96 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
							/>
							<button
								type="submit"
								class="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-primary"
								>make it short</button
							>
						</form>
					</div>
				</div>
			</div>
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
