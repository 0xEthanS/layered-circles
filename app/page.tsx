export default function Home() {
	return (
		<div>
			<div className="mx-auto px-6 lg:px-8 max-w-screen flex w-full flex-col justify-center">


				<div className="mx-auto absolute left-0 top-[120px] my-auto flex h-fit w-full grow flex-col justify-end">


					<div className="w-full max-w-2xl mx-auto flex flex-col items-center mb-6 text-center">


						<h1 className="font-sans tracking-[-0.01em] text-4xl leading-[1.1] mb-4 text-[clamp(20px,5vh,36px)]! font-medium text-center max-w-lg">
							Hero Header
						</h1>


						<p className="text-base leading-tight tracking-normal mr-6 text-[min(3vh,16px)]!">
							Hero Sub-Header
						</p>

						
						<div className="relative flex flex-wrap items-center justify-center gap-4 pt-6">
							<div className="rounded-full">
								<a className="group inline-flex items-center justify-center rounded-full h-14 gap-4 px-6 py-2.5 font-mono text-sm 


									text-white

									bg-black

									hover:bg-black/95
									
								"
									href="#"
								>
									CTA Button
								</a>
							</div>
						</div>


					</div>


				</div>


			</div>





			<Circle />


		</div>
	);
}




function Circle() {
    return(
        <div className="bg-linear-to-b relative flex justify-center min-h-[calc(100vh)] 
				from-rose-300 
				to-orange-300  
				-z-10 
				overflow-hidden
			"
		>


			{/* Circle-xl */}
			<div className="absolute translate-y-1/2 bottom-0">
				<div className="rounded-full flex justify-center h-[calc(100vh)] w-[calc(100vh)] p-2 
						border 
						border-white
						bg-[rgba(255,255,255,0.3)] 
						Circle-xl
					"
				>
					<div className="relative flex justify-center">
						<Word word='Eritrea' degrees="rotate-[0deg]" />
						<Word word='Djibouti' degrees="rotate-[24deg]" />
						<Word word='Greece' degrees="rotate-[48deg]" />
						<Word word='Qatar' degrees="rotate-[72deg]" />
						<Word word='Iran' degrees="rotate-[96deg]" />

						<Word word='Turkmenistan' degrees="rotate-[120deg]" />
						<Word word='Tajikistan' degrees="rotate-[144deg]" />
						<Word word='Pakistan' degrees="rotate-[168deg]" />
						<Word word='South Korea' degrees="rotate-[192deg]" />
						<Word word='Bangladesh' degrees="rotate-[216deg]" />

						<Word word='Thailand' degrees="rotate-[240deg]" />
						<Word word='Cambodia' degrees="rotate-[264deg]" />
						<Word word='Vietnam' degrees="rotate-[288deg]" />
						<Word word='Taiwan' degrees="rotate-[312deg]" />
						<Word word='Phillipines' degrees="rotate-[336deg]" />
					</div>
				</div>
			</div>
			

			{/* Circle-l */}
			<div className="absolute translate-y-1/2 bottom-0">
				<div className="rounded-full flex justify-center h-[calc(100vh_/_1.182)] w-[calc(100vh_/_1.182)] p-2 
						border 
						border-white
						bg-[rgba(255,255,255,0.25)] 
						Circle-l
					"
				>
					<div className="relative flex justify-center">
						<Word word='Sudan' degrees="rotate-[0deg]" />
						<Word word='Bahrain' degrees="rotate-[24deg]" />
						<Word word='Oman' degrees="rotate-[48deg]" />
						<Word word='South Sudan' degrees="rotate-[72deg]" />
						<Word word='Ethiopia' degrees="rotate-[96deg]" />

						<Word word='Israel' degrees="rotate-[120deg]" />
						<Word word='Jordan' degrees="rotate-[144deg]" />
						<Word word='Yemen' degrees="rotate-[168deg]" />
						<Word word='India' degrees="rotate-[192deg]" />
						<Word word='Nepal' degrees="rotate-[216deg]" />

						<Word word='China' degrees="rotate-[240deg]" />
						<Word word='Bhutan' degrees="rotate-[264deg]" />
						<Word word='Myanmar' degrees="rotate-[288deg]" />
						<Word word='North Korea' degrees="rotate-[312deg]" />
						<Word word='Laos' degrees="rotate-[336deg]" />
					</div>
				</div>
			</div>
			

			{/* Circle-m */}
			<div className="absolute translate-y-1/2 bottom-0">
				<div className="rounded-full flex justify-center h-[calc(100vh_/_1.418)] w-[calc(100vh_/_1.418)] p-2 
						border 
						border-white
						bg-[rgba(255,255,255,0.2)] 
						Circle-m
					"
				>
					<div className="relative flex justify-center">
						<Word word='Saudi Arabia' degrees="rotate-[0deg]" />
						<Word word='Tunisia' degrees="rotate-[45deg]" />
						<Word word='Benin' degrees="rotate-[90deg]" />
						<Word word='Chad' degrees="rotate-[135deg]" />
						<Word word='Egypt' degrees="rotate-[180deg]" />

						<Word word='Turkey' degrees="rotate-[225deg]" />
						<Word word='Syria' degrees="rotate-[270deg]" />
						<Word word='Iraq' degrees="rotate-[315deg]" />
					</div>
				</div>
			</div>
			

			{/* Circle-s */}
			<div className="absolute translate-y-1/2 bottom-0">
				<div className="rounded-full flex justify-center h-[calc(100vh_/_1.814)] w-[calc(100vh_/_1.814)] p-2 
						border 
						border-white
						bg-[rgba(255,255,255,0.15)] 
						Circle-s
					"
				>
					<div className="relative flex justify-center">
						<Word word='Guinea' degrees="rotate-[0deg]" />
						<Word word='Mali' degrees="rotate-[60deg]" />
						<Word word='Algeria' degrees="rotate-[120deg]" />
						<Word word='Niger' degrees="rotate-[180deg]" />
						<Word word='Lybia' degrees="rotate-[240deg]" />
						<Word word='Afganistan' degrees="rotate-[300deg]" />
					</div>
				</div>
			</div>


			{/* Circle-xs */}
			<div className="absolute translate-y-1/2 bottom-0">
				<div className="rounded-full flex justify-center h-[calc(100vh_/_2.516)] w-[calc(100vh_/_2.516)] p-2 
						border 
						border-white
						bg-[rgba(255,255,255,0.1)] 
						Circle-xs
					"
				>
					<div className="relative flex justify-center">
						<Word word='Portugal' degrees="rotate-[0deg]" />
						<Word word='Morocco' degrees="rotate-[72deg]" />
						<Word word='Western Sahara' degrees="rotate-[144deg]" />
						<Word word='Senegal' degrees="rotate-[216deg]" />
						<Word word='Gambia' degrees="rotate-[288deg]" />
					</div>
				</div>
			</div>


		</div>
    );
}






function Word(
    { 
        word, 
        degrees 
    }: { 
        word: string; 
        degrees: string 
    }
) {
    return (
        <div className={`
            flex 
            justify-center 
            absolute 
            inset-0 
            origin-center 
            whitespace-nowrap 

			text-xs 

			text-black

            ${degrees}
        `}
        >   
            {word}
        </div>
		
    )
}



