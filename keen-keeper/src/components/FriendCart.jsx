import Image from 'next/image';
import Link from 'next/link';



const FriendCart =async () => {

    const friendsPromise = async () => {
        const res = await fetch("http://localhost:3000/friends.json");
        const data = await res.json();
        return data;
    }


    const friends = await friendsPromise();
    console.log(friends);

    // const friends = [
    //     {
    //         "id": 1,
    //         "name": "Ayesha Rahman",
    //         "picture": "https://randomuser.me/api/portraits/women/44.jpg",
    //         "email": "ayesha.rahman@gmail.com",
    //         "days_since_contact": 19,
    //         "status": "overdue",
    //         "tags": [
    //             "college",
    //             "close friend",
    //             "Dhaka"
    //         ],
    //         "bio": "Met during freshman year at BUET. She's a civil engineer now working on infrastructure projects in Sylhet. We used to pull all-nighters before exams and now catch up over biriyani whenever she's in town.",
    //         "goal": 14,
    //         "next_due_date": "2026-04-10"
    //     },
    //     {
    //         "id": 2,
    //         "name": "Marcus Webb",
    //         "picture": "https://randomuser.me/api/portraits/men/32.jpg",
    //         "email": "marcus.webb@outlook.com",
    //         "days_since_contact": 6,
    //         "status": "on-track",
    //         "tags": [
    //             "work",
    //             "mentor"
    //         ],
    //         "bio": "My manager at the first startup I joined in London. Taught me more about product thinking in six months than I learned in four years of school. We still do monthly catch-ups over video call even though he's moved to Toronto.",
    //         "goal": 30,
    //         "next_due_date": "2026-05-06"
    //     },
    //     {
    //         "id": 3,
    //         "name": "Priya Nair",
    //         "picture": "https://randomuser.me/api/portraits/women/68.jpg",
    //         "email": "priya.nair92@yahoo.com",
    //         "days_since_contact": 11,
    //         "status": "almost due",
    //         "tags": [
    //             "childhood",
    //             "close friend"
    //         ],
    //         "bio": "Grew up two houses down from each other in Mirpur. We used to climb the guava tree in her backyard and read comics until her mom called us for lunch. She's a pediatrician now in Chittagong and somehow still finds time to send voice notes.",
    //         "goal": 10,
    //         "next_due_date": "2026-04-15"
    //     },
    //     {
    //         "id": 4,
    //         "name": "Daniel Osei",
    //         "picture": "https://randomuser.me/api/portraits/men/75.jpg",
    //         "email": "d.osei@protonmail.com",
    //         "days_since_contact": 45,
    //         "status": "overdue",
    //         "tags": [
    //             "travel",
    //             "college"
    //         ],
    //         "bio": "We backpacked across Southeast Asia together in 2019 — Bangkok to Hanoi on a shoestring budget. He's back in Accra running a sustainable fashion brand. I keep meaning to visit and he keeps sending me fabric samples.",
    //         "goal": 21,
    //         "next_due_date": "2026-03-30"
    //     },
    //     {
    //         "id": 5,
    //         "name": "Sofia Marchetti",
    //         "picture": "https://randomuser.me/api/portraits/women/21.jpg",
    //         "email": "sofia.marchetti@icloud.com",
    //         "days_since_contact": 3,
    //         "status": "on-track",
    //         "tags": [
    //             "close friend",
    //             "creative"
    //         ],
    //         "bio": "Met at a design conference in Singapore in 2022. She's a UX researcher based in Milan and one of the most thoughtful people I know. We swap book recommendations every few weeks and have a running list of restaurants we want to try when we're in the same city.",
    //         "goal": 14,
    //         "next_due_date": "2026-04-20"
    //     },
    //     {
    //         "id": 6,
    //         "name": "Tariq Hossain",
    //         "picture": "https://randomuser.me/api/portraits/men/58.jpg",
    //         "email": "tariq.h@gmail.com",
    //         "days_since_contact": 13,
    //         "status": "almost due",
    //         "tags": [
    //             "family friend",
    //             "Dhaka",
    //             "close friend"
    //         ],
    //         "bio": "Our dads were colleagues and we basically grew up at each other's houses. He moved to Kuala Lumpur for his MBA and stayed on to work in fintech. We text a lot but actual conversations have gotten less frequent since he had his second kid.",
    //         "goal": 14,
    //         "next_due_date": "2026-04-16"
    //     },
    //     {
    //         "id": 7,
    //         "name": "Yuki Tanaka",
    //         "picture": "https://randomuser.me/api/portraits/women/85.jpg",
    //         "email": "yuki.tanaka.dev@gmail.com",
    //         "days_since_contact": 62,
    //         "status": "overdue",
    //         "tags": [
    //             "work",
    //             "tech"
    //         ],
    //         "bio": "We collaborated on an open-source project for almost two years and became close through late-night GitHub comments and long Discord calls. She's a backend engineer at a robotics startup in Osaka. I haven't reached out since the project wound down and I genuinely miss talking to her.",
    //         "goal": 30,
    //         "next_due_date": "2026-03-15"
    //     },
    //     {
    //         "id": 8,
    //         "name": "Carlos Mendez",
    //         "picture": "https://randomuser.me/api/portraits/men/14.jpg",
    //         "email": "carlosmendez.mx@gmail.com",
    //         "days_since_contact": 8,
    //         "status": "on-track",
    //         "tags": [
    //             "college",
    //             "sports"
    //         ],
    //         "bio": "Roommates for two years during my exchange semester in Mexico City. He dragged me to every futbol match and taught me to make proper tacos al pastor. Now works as a sports journalist in Guadalajara. We still watch the same games from different countries and argue over WhatsApp.",
    //         "goal": 21,
    //         "next_due_date": "2026-04-29"
    //     }
    // ]

    return (
        <div className="bg-base-200">
            <div className="container mx-auto w-full px-4 md:px-0 mt-6 md:mt-10 md:w-[60%] py-6 md:py-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Friends</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10">

                    {
                        friends.map(friend => <Link href={`/${friend.id}`} key={friend.id} className="bg-white rounded-lg shadow-md p-4 flex items-center flex-col gap-2">
                            <Image
                                src={friend.picture}
                                alt={friend.name}
                                width={100}
                                height={100}
                                className="rounded-full object-cover object-center w-[100px] h-[100px]"
                            />
                            <h3 className="text-xl font-semibold mb-2">{friend.name}</h3>
                            <p className="text-gray-600">{friend.days_since_contact}d ago</p>
                            <div className="flex items-center gap-2 flex-wrap justify-center ">
                                {
                                    friend.tags.map((tag, index) => <button key={index} className="bg-[#CBFADB]  text-[#244D3F]  py-2 px-2 rounded-full text-sm">{tag}</button>)
                                }
                            </div>

                            <button
                                className={`${friend.status === 'overdue'
                                    ? 'bg-[#EF4444]'
                                    : friend.status === "almost due"
                                        ? 'bg-[#EFAD44]'
                                        : friend.status === 'on-track'
                                            ? 'bg-[#244D3F]'
                                            : ""
                                    } text-white py-2 px-2 rounded-full text-sm`}
                            >
                                {friend.status}
                            </button>
                        </Link>)
                    }

                </div>

            </div>
        </div>
    );
};

export default FriendCart;