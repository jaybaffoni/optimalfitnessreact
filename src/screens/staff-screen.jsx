import * as React from 'react';
import {Image, Jumbotron} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {config} from "../config";

export function StaffScreen(props) {

	const width = 135;

    return (
        <div className="container" style={{marginTop: 24}}>

            <div style={{textAlign: 'center', display: 'inline-block'}}>
                <a href="#bryan"><div style={{display: 'inline-block', maxWidth: width}}>
                    <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
                        <Image roundedCircle src={'/images/headshots/bryan.jpg'} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
                        <h5>Bryan<br/>Doo</h5>
                    </div>
                </div></a>
                <a href="#laurie"><div style={{display: 'inline-block', maxWidth: width}}>
                    <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
                        <Image roundedCircle src={'/images/headshots/Laurie.jpg'} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
                        <h5>Laurie<br/>Lamoureux<br/>Borrelli</h5>
                    </div>
                </div></a>
				<a href="#zach"><div style={{display: 'inline-block', maxWidth: width}}>
					<div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
						<Image roundedCircle src={'/images/headshots/zach.JPG'} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
						<h5>Zach<br/>Wiernicki</h5>
					</div>
				</div></a>
                <a href="#amanda"><div style={{display: 'inline-block', maxWidth: width}}>
                    <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
                        <Image roundedCircle src={'/images/headshots/amanda.jpg'} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
                        <h5>Amanda<br/>Carvalho</h5>
                    </div>
                </div></a>
                <a href="#jack"><div style={{display: 'inline-block', maxWidth: width}}>
                    <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
                        <Image roundedCircle src={'/images/headshots/jack.jpg'} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
                        <h5>Jack<br/>Baldwin</h5>
                    </div>
                </div></a>
				<a href="#eryenne"><div style={{display: 'inline-block', maxWidth: width}}>
					<div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
						<Image roundedCircle src={'/images/headshots/eryenne.JPG'} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
						<h5>Eryenne<br/>Brinn</h5>
					</div>
				</div></a>
				<a href="#hannah"><div style={{display: 'inline-block', maxWidth: width}}>
					<div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
						<Image roundedCircle src={'/images/headshots/Hannah.jpg'} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
						<h5>Hannah<br/>Crowley</h5>
					</div>
				</div></a>
                <a href="#corinne"><div style={{display: 'inline-block', maxWidth: width}}>
                    <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
                        <Image roundedCircle src={'/images/headshots/corinne.JPG'} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
                        <h5>Corinne<br/>Donovan</h5>
                    </div>
                </div></a>
                <a href="#frank"><div style={{display: 'inline-block', maxWidth: width}}>
                    <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
                        <Image roundedCircle src={'/images/headshots/frank c.png'} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
                        <h5>Frank<br/>Cypriano</h5>
                    </div>
                </div></a>
                <a href="#biko"><div style={{display: 'inline-block', maxWidth: width}}>
                    <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
                        <Image roundedCircle src={'/images/headshots/biko.png'} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
                        <h5>Biko<br/>Kponou</h5>
                    </div>
                </div></a>
                <a href="#cleo"><div style={{display: 'inline-block', maxWidth: width}}>
                    <div style={{display: 'grid', gridTemplateRows: 'auto 1fr'}}>
                        <Image roundedCircle src={'/images/headshots/cleo.png'} className={'profile-header'} style={{objectFit: 'cover', margin: 4}}/>
                        <h5>Cleo<br/>Barker</h5>
                    </div>
                </div></a>
            </div>


            <div id="bryan" className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
                <Image roundedCircle src={'/images/headshots/bryan.jpg'} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
                <div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
                    <h1>Bryan Doo</h1>
                    <h3>Owner / Strength Coach</h3>
                    <h5>NSCA CSCS; ACSM/NASM- CPT
                        <br/>M.S. in Exercise Physiology and Health Promotion, California University of Pennsylvania
                        <br/>B.S. in Sports and Exercise Science, Messiah College
                    </h5>
                </div>
                <div style={{textAlign: 'justify'}}>
                    <p>Bryan Doo is the founder and president of Optimal Fitness Boston. He founded Optimal Fitness in 1996, offering in-home personal training, corporate wellness, speed and agility camps and strength training for athletes (professional, collegiate, international and high school).

                        <br/><br/>While running Optimal Fitness, Doo was hired by the Boston Celtics as the Head Strength and Conditioning Coach in 2003 and remained an integral part of the team for the next 14 years. He worked with the players year-round to prepare them for the rigors of the NBA season, rehab injuries, and track in-season conditioning and strength levels of all the players. While Doo was the head strength coach with the Celtics they won the 2007-2008 NBA Championship and during the 2015-2016 season Doo was voted, by his peers, the NBA Strength Coach of the Year.

                        <br/><br/>Throughout the years, Optimal Fitness has acquired contracts to manage various corporate wellness facilities in the greater Boston area. The OFIT staff was tasked with creating programming for each of the companies' employees and create individualized systems for each site, ranging from team building events, to a strong referral network of professionals in the health world (nutritionists, physical therapists, mental health coaches, etc.), and more.

                        <br/><br/>Prior to the Celtics, Doo served as the Director of Wellness at Harvard Business School (1998-2001), where he implemented programs and activities for staff, students and executive education cohorts. During that time, he was on the coaching staff for the women’s lacrosse team and served as a  strength and conditioning coach at Harvard University from 1999-2001. He was fortunate enough to return to Harvard as a consultant and mentor for the men’s basketball team in the area of strength and conditioning from 2017-2020.

                        <br/><br/>Doo has also consulted and trained various NBA, NHL, EPL, Serie A, Olympic, WTA, and elite athletes and more. He is a frequent speaker regarding sports and athletic development, injury prevention and team training at local and national conferences. He also served as a guest lecturer at Brown University as part of the Exercise Physiology/Biomechanics course.

                        <br/><br/>When not training, Doo can be found spending time with his wife Brianna ,6 children and all of their pets. Doo’s children are Mikayla (12), Kailani (10), Alana (8), Kalea (6), Maddox (5) and Atticus (3).
                    </p>
                </div>
            </div>

            <div id="laurie" className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
                <Image roundedCircle src={'/images/headshots/Laurie.jpg'} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
                <div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
                    <h1>Laurie Lamoureux Borrelli</h1>
                    <h3>Director / Strength Coach</h3>
                    <h5>NSCA-CSCS; NASM-CPT
                        <br/>B.S. in Sports Medicine, Merrimack College
                    </h5>
                </div>
                <div style={{textAlign: 'justify'}}>
                    <p>Laurie joined the Optimal Fitness Boston team in 2007 and is currently the Director of Health and Human Performance. She is Certified both from the National Strength and Conditioning Association (NSCA) as well as National Academy of Sports Medicine (NASM). In her current role, Laurie supervises not only our trainers but all of our training sites, programs and camps as well.

                        <br/><br/>Laurie earned a B.S. in Sports Medicine with a focus in exercise physiology from Merrimack College. At Merrimack, Laurie excelled on the women's soccer team as the team captain and earned All-American honors and  Scholar- All American. From there she earned a spot on the Women's USA Futsal team where she played in multiple tournaments post college.

                        <br/><br/>Laurie brings her positive energy as well as her incredible background in sports and injury prevention to help clients and athletes of all levels excel. Laurie is known for her ability to customize programs to the individuals needs and use science to help individuals excel and reach their goals.

                        <br/><br/>Laurie’s passion is helping others and she continues to do so every day from pro athletes, to weekend warriors, grandparents, middle schoolers, and everyone in between. She focuses on their needs and designs her training programs accordingly, both as a personal trainer and a soccer coach, which she has been doing since high school.

                        <br/><br/>In her free time, Laurie loves the outdoors, playing soccer, fantasy books, and quality time with family and friends. She is constantly looking to better herself and believes that learning is always an open door.
                    </p>
                </div>
            </div>

			<div id="zach" className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
				<div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
				<Image roundedCircle src={'/images/headshots/zach.JPG'} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
				<div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
					<h1>Zach Wiernicki</h1>
					<h3>Wellness Specialist</h3>
					<h5>NASM-CPT, CES and PES
						<br/>B.S. in Sports and Exercise Science, Messiah College
					</h5>
				</div>
				<div style={{textAlign: 'justify'}}>
					<p>Zach joined the Optimal Fitness in 2006 and brings more than 15 years of training experience to the team. Before joining Optimal Fitness, he interned with the strength and conditioning coach of the Boston Celtics.

						<br/><br/>As a trainer, Zach specializes in corrective exercise and performance based programming. He also focuses on basketball skill development with athletes and those trying to better their basketball game. In all of his training, whether athlete or general population, Zach brings tremendous enthusiasm, a positive attitude and an eagerness to better the lives of his clients.

						<br/><br/>Attending Messiah College he earned his B.S. in Sports and Exercise Science with a health and fitness concentration and played on the men’s basketball team. He was first team all-league as a power forward and is part of the 1,000-point club.

						<br/><br/>Zach lives in New Hampshire and enjoys being in the great outdoors with his wife and three kids. Hiking, fishing and biking are just a few things you will find him doing any chance he gets. He also is a gentleman’s farmer raising animals and growing his own food at his home.
					</p>
				</div>
			</div>

            <div id="amanda" className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
                <Image roundedCircle src={'/images/headshots/amanda.jpg'} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
                <div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
                    <h1>Amanda Carvalho</h1>
                    <h3>Personal Trainer</h3>
                    <h5>NASM-CPT and PES;
                        <br/>M.S. in Exercise Science and Health Promotion, California University of Pennsylvania
                        <br/>B.S. in Allied Health Science, University of Connecticut
                    </h5>
                </div>
                <div style={{textAlign: 'justify'}}>
                    <p>Amanda joined Optimal Fitness in 2020 with an abundance of knowledge through her degrees in Allied Health Science from the University of Connecticut and in Exercise Science and Health Promotion with a concentration in Performance Enhancement and Injury Prevention from California University of Pennsylvania.

                        <br/><br/>Kicking off her professional career, Amanda spent 4 years working in an orthopedic physical therapy clinic where she helped patients of all ages and levels of rehabilitation. In addition, she oversaw her own patients in an aftercare program designed to get athletes and active adults back to their pre-injury levels. The work she performed with her patients, as well as her own experience with injuries, encouraged Amanda to go back to school and earn her Master's degree, and concurrently her certifications as a personal trainer and Performance Enhancement Specialist through NASM.

                        <br/><br/>Transitioning into personal training, Amanda started as a trainer and small group instructor at a private training facility and worked her way up to the general manager position.

                        <br/><br/>In addition to personal training, Amanda spent 8 years coaching high school and youth premier club soccer after having been a member of the Division 1 UConn women’s soccer team and playing throughout her entire life.</p>
                </div>
            </div>

            <div id="jack" className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
                <Image roundedCircle src={'/images/headshots/jack.jpg'} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
                <div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
                    <h1>Jack Baldwin</h1>
                    <h3>Performance Coach</h3>
                    <h5>M.S. in Kinesiology - Long Beach State University
                        <br/>B.S. in Applied Exercise Science - Springfield College
                    </h5>
                </div>
                <div style={{textAlign: 'justify'}}>
                    <p>Jack joined the Optimal Fitness team in 2021 and brought with him five years of experience as a strength and conditioning coach. He has worked with athletes from youth, high school, college and Olympic levels, including USA Beach Volleyball athletes.

                        <br/><br/>Jack is passionate about helping athletes gain a competitive advantage by learning the skills needed for their sport, both mentally and physically. His mission is to teach athletes to become better movers, gain strength and customize training programs to meet the needs of each athlete.

                        <br/><br/>One of Jack’s main goals is to integrate mind and body, preparing both for competition. As part of his Masters degree program, Jack completed Sport Psychology classes which allows him to work with clients on mental skills by teaching imagery, visualization, attentional focus, confidence, self talk and more. He is also a Certified Strength and Conditioning Specialist (CSCS) through the National Strength and Conditioning Association (NSCA).

                        <br/><br/>Jack grew up in Western Massachusetts and was a 4-year collegiate baseball player at Springfield College. In his free time, he enjoys anything outdoors, reading non-fiction books, quality time with family and friends, and watching and playing multiple sports including basketball, golf, tennis, and baseball.</p>
                </div>
            </div>

			<div id="eryenne" className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
				<div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
				<Image roundedCircle src={'/images/headshots/eryenne.JPG'} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
				<div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
					<h1>Eryenne Brinn</h1>
					<h3>Group Instructor / Personal Trainer</h3>
					<h5>NASM-CPT; EFTI Pre/Post Natal
						<br/>B.S. in Sport Management, Ithaca College
					</h5>
				</div>
				<div style={{textAlign: 'justify'}}>
					<p>Eryenne joined Optimal Fitness in 2018 and brings a diverse background to the team. She is a former public relations and marketing pro turned personal trainer and group fitness coach. Having played sports her entire life including women’s lacrosse at Ithaca College, working in gyms throughout high school and college, and working on her own sports performance with strength coaches along the way, she always had a love and keen interest for the field of fitness. And after working in Corporate America for nearly a decade she decided to take her long-time passion for fitness and meld it with her desire to help others as she transitioned to full-time personal training in 2016.

						<br/><br/>Eryenne works one-on-one with clients as well as in groups. In all scenarios she works to individualize programs to fit each client to help them be and feel their best. To Eryenne, the people she trains are there for a reason-they are there to better their lives in some shape or form, and she loves the mission of helping and guiding them to live happier and healthier lives while reaching their specified goals.

						<br/><br/>Eryenne’s love for working with others has led her to pursue various training certifications, in addition to her National Academy of Sports Medicine - Certified Personal Trainer (NASM-CPT) certification, including kettlebells, pre/post natal, spinning and trigger point. And she plans to continue growing her knowledge base to better serve her clients and help others in the future.

						<br/><br/>In her free time, Eryenne enjoys spending time with her friends and family, specifically her two young sons, doing just about anything outside (except when it’s too cold then she opts for a fire inside!), traveling to new places and seeing the world, listening endlessly to podcasts, sipping coffee and smoothies, the Philadelphia Eagles and exercising to feel her best.
					</p>
				</div>
			</div>

			<div id="hannah" className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
				<div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
				<Image roundedCircle src={'/images/headshots/Hannah.jpg'} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
				<div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
					<h1>Hannah Crowley</h1>
					<h3>Personal Trainer</h3>
					<h5>NASM - CPT, CNC, and CES
						<br/>B.S. in Biology, Boston College
					</h5>
				</div>
				<div style={{textAlign: 'justify'}}>
					<p>Hannah joined Optimal Fitness in 2021 as a personal trainer. She is certified as a personal trainer, nutrition coach, and corrective exercise specialist through the National Academy of Sports Medicine (NASM). She  earned a B.S. in Biology at Boston College. She grew up playing soccer, basketball, and lacrosse, but left her identity of an “athlete” behind as she sang in The Bostonians. Nevertheless, she kept her athletic spirit fueled through intramural sports and exercise.

						<br/><br/>Prior to joining Optimal Fitness, Hannah completed two physical therapy internships, an athletic training internship with the Boston Breakers, as well as a personal training internship with JET Boston where she gained training expertise from various perspectives.

						<br/><br/>Hannah adds a unique background to the OFIT team having worked as a skincare consultant and store educator for Follain where she taught others about the importance of using nontoxic personal-care products. She also spent six months working as an Au Pair in New Zealand. Returning home sooner than planned due to the pandemic, she spent the next six months renovating and selling a campervan. In her free time you can find her hiking and running around with her dog, Nana.

						<br/><br/>She is excited to be back in Boston and working with Optimal Fitness to share and further nourish her passion for healthy, sustainable living with clients of all backgrounds.
					</p>
				</div>
			</div>

			<div id="corinne" className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
				<div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
				<Image roundedCircle src={'/images/headshots/corinne.JPG'} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
				<div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
					<h1>Corinne Donovan</h1>
					<h3>Group Instructor / Personal Trainer</h3>
					<h5>ISSA-CPT
						<br/>B.A. in Psychology, University of Massachusetts
					</h5>
				</div>
				<div style={{textAlign: 'justify'}}>
					<p>Corinne has been training and teaching group fitness classes for more than 15 years. As a trainer Corinne loves to push her clients to be their best physically, mentally and emotionally.  She creates individualized programs for each of her clients that best suit their needs so they can see results quickly. She specializes in High Intensity Interval Training (HIIT) and wants her clients to walk away feeling energized and wanting more!

						<br/><br/>Corinne graduated from The University of Massachusetts Amherst’s Honor Program, Cum Laude with a B.A. in Psychology. At UMass, she rowed Novice Crew and played intramural soccer. Prior to UMass, she attended Stonehill College her freshman year where she played on the women’s soccer team. While at Stonehill, she was the only freshman on the starting lineup and was named Rookie of the Year. During Corinne’s semester abroad in England she played on the women’s soccer team at The University of Hull.

						<br/><br/>Corinne is certified through the International Sport Science Association (ISSA) and she received her Master Trainer certification through NY Strength.

						<br/><br/>She currently lives in Natick with her husband, two boys and their cat Larry. In her spare time she is cheering on her boys who play hockey, lacrosse, baseball and flag football, pursuing her passion in photography and indulging in her love for interior design.</p>
				</div>
			</div>

            <div id="frank" className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
				<div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
				<Image roundedCircle src={'/images/headshots/frank c.png'} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
				<div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
					<h1>Frank Cypriano</h1>
					<h3>Personal Trainer</h3>
					<h5>NASM-CPT
						<br/>B.A. in Criminal Justice, Saint Anselm College
					</h5>
				</div>
				<div style={{textAlign: 'justify'}}>
					<p>Frank Cypriano joined Optimal Fitness in 2021 as a personal trainer. He is a certified personal trainer through the National Academy of Sports Medicine (NASM) and was previously certified through the International Sports Science Association (ISSA). Frank grew up playing soccer and basketball. He started coaching his younger brother’s soccer team after college and stuck with it having been a youth + high school soccer coach for almost a decade. Frank found his way to personal training after undergoing his own weight loss transformation at the start of 2018, wanting to help others achieve their goals as well.

						<br/><br/>Prior to Optimal Fitness Frank has worked at gyms in the Boston area, as well as hosting 1-on-1 sessions in his driveway during the early days of the pandemic before gyms opened back up.  That resourcefulness has landed him a wide array of previous jobs building his unique background; from the rental car business, to TV production for ESPN in Bristol, CT, to working as an on-site interpreter for Portuguese and Spanish speakers, Frank is a jack-of-all-trades.

						<br/><br/>Which leads Frank to his openness in training styles and his interests for further continuing his education. From doing explosive drills with athletes, working the barbell to grow some lean mass or showing you bodyweight exercises you can get done at home or in the office, Frank wants to find what works best for you to help achieve your fitness goals.

						<br/><br/>In his free time Frank enjoys going on adventures with his miniature-husky, Tornado. As a soccer junkie he lives and dies with the Brazilian soccer club, Flamengo and the Brazilian National Team. The same applies for the Boston Celtics. Frank is currently working towards earning soccer coaching licenses that will help him with his ultimate goal of coaching soccer at the collegiate or professional level.</p>
				</div>
			</div>
            
            <div id="biko" className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
				<div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
				<Image roundedCircle src={'/images/headshots/biko.png'} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
				<div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
					<h1>Biko Kponou</h1>
					<h3>Personal Trainer</h3>
					<h5>NASM CPT
						<br/>W.I.T.S. Personal Training Certification, Mass Bay Community College
					</h5>
				</div>
				<div style={{textAlign: 'justify'}}>
					<p>Biko joined Optimal Fitness in 2021 as a personal trainer and brings more than 7 years of training experience working with clients from all different backgrounds. Biko is certified as a personal trainer by the National Academy of Sports Medicine (NASM). He has also completed certifications specializing in pilates, TRX training, and training older adults. Biko played sports throughout his life, but decided to pursue a career in training when he became frustrated in his recovery from a back injury he sustained in a high school football game. After unsuccessful efforts to address his pain with medical treatment, Biko has found that movement is the key to his health and works with clients to similarly address pain management and injury prevention through holistic exercise.

						<br/><br/>Prior to joining Optimal Fitness, Biko worked at other elite clubs in the Metrowest area. He has experience with private one-on-one training, as well as group/class training and couples training. He prefers the individualized attention that he can provide to his clients with private training, and strives to develop a rapport and trust between himself and his clients. Biko focuses on functional fitness, or exercise that supports your health in your daily life. This includes exercise relating to postural alignment, balance, spatial awareness, and resistance training. Don’t let the name “functional fitness” fool you, Biko challenges his clients with exercises that deceptively appear easier than they are. Biko’s clients commonly tell him, “You’re working muscles I didn’t even know I had!” 

						<br/><br/>Biko is a positive person that sees opportunity in every challenge. Outside of work he enjoys good food, music, and making art. His family is very important to him and he is constantly providing them with exercises to sustain their health as well. Helping others achieve their fitness goals and improve their health motivates Biko everyday, and he is excited to continue that mission at Optimal Fitness.</p>

				</div>
			</div>
            
            <div id="cleo" className="card" style={{padding: 24, textAlign: 'center', position: 'relative'}}>
                <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: 200, backgroundColor: config.primaryColor}}/>
                <Image roundedCircle src={'/images/headshots/cleo.png'} style={{width: 200, height: 200, objectFit: 'cover', marginBottom: 8, marginLeft: 'auto', marginRight: 'auto', border: 'solid 5px white', zIndex: 10, marginTop: 75}}/>
                <div style={{width: '100%', marginLeft: 'auto', marginRight: 'auto', marginBottom: 24}}>
                    <h1>Cleo Barker</h1>
                    <h3>Fitness Attendant</h3>
                    <h5>NASM-CPT
                        <br/>B.A. in International Affairs and Journalism, University of Maine
                    </h5>
                </div>
                <div style={{textAlign: 'justify'}}>
                    <p>Cleo joined the Optimal Fitness team in 2022 as a fitness attendant. Cleo’s interest in fitness took off in the last few years after she realized how much of an impact it has on all aspects of wellness and quality of life.

                        <br/><br/>At the beginning of 2022 when she decided to move from Maine to the Boston area, she also made the jump into fitness as a career. She hopes to continue to learn as much as possible about the field and use that knowledge to help other people discover the power of exercise in many different forms to change their lives for the better. 

                        <br/><br/>When not at the gym she also loves being outside, strong coffee, spending time with family and friends, traveling, reading and the occasional art project. 

                        <br/><br/>Cleo is certified as a personal trainer through the National Academy of Sports Medicine (NASM). 

                        <br/><br/>In her free time, Laurie loves the outdoors, playing soccer, fantasy books, and quality time with family and friends. She is constantly looking to better herself and believes that learning is always an open door.</p>
                </div>
            </div>
        </div>
    );
};
