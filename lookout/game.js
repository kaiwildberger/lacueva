let traits = {
    light: null,
    skunkwatch: null, // true watched, "yell" scared
}
let temp = "";

// vibe of this whole thing is reckoning with an impending move/change (merced). and that not everything turns out perfectly (moonlight > this summer)
// somewhere along they take a fall and end up bleeding

// 'eagle peak' should Not be the final title


/* line parking lot

You thought the light of the moon would be different. // end?

In the same way some people have melodic voices // scottie

Our eternally mammalian bodies, like celestial bodies, are the same ones we grow up with; 
like our eternally mammalian bodies, the earth and soil is ever-changing as our legs and bellies sprout hair.
Butterflies' and beetles' reinventions   // we go long-term with our live paths and goals

The cloudless sky affords the you nor the stars no privacy from the moon's light. // shits bright

*/

let unfinished = { title: "Continue", text: "I haven't written this part yet. Come back in a little bit!" }
let credits = { title: "Credits", text: 'Written and coded by kai.'} // not beta read yet Lol

let game = {
    start: {
        name: "start",
        text: `It would have been a beautiful night for stargazing--Sagittarius in the south, Ursa Major always in the north.
        You started the drive too late and arrived at the trailhead just as the sunset faded, the gibbous moon already above the eastern hills.
        The July night teases you with a cloudless sky and in its stubbornness it must have plans for you other than stargazing. You came out here to see the sky, though, and that's the moon's domain too.<br><br>
        You're heading up a dusty fire road to a rocky peak. In the daytime you can see down the ridge to the valley below, but with the landscape washed in blue light
        you see only the lights from the shops along the road a few miles away--nevermind the faint light from stars so far away we measure their distances in hundreds of years.
        It's only barely light enough to see the ground in front of you, but you brought a lantern for when it gets darker.`,
        choiceset: [[
                {
                    title: "Use it now", // i want to be sure of what im doing
                    // the contrast of known (lit) and unknown & unlit is scarier than accepting that its literally nighttime and the whole
                    // landscape won't reveal itself without the sun
                    text: `You bring out your shitty plastic flashlight and with the way ahead illuminated you begin up the road to the peak. The oaks
                    grown close to the road make a foreboding beginning; with the flashlight you can just begin to see their lowest branches.`,
                    scene: "gate",
                    action: () => traits.light = true
                },
                {
                    title: "Leave it", // whatever the world has for me, i'm ready for
                    // more introspection on the way up. the sky where the ridge drops away on both sides is more beautiful ( + lightning tree)
                    text: `You leave your flashlight in your pocket and set off up the road toward the peak bathed in moonlight. The small stand of oak trees
                    hugs the side of the road close, wrapping you in darkness, and you enjoy taking the moment to be thoughtful about your footsteps.`,
                    scene: "gate",
                    action: () => traits.light = false
                },
            ]]
    },
    "gate": { // this is the gate that goes down to little basin, not the first one. 
        name: "gate",
        text: ``,
        textfn: () => {
            if(traits.light === true) {
                return `The road surface is powdery from countless tires this road has seen and bits of it puff up from beneath your feet, catching the light from
                your hand like tiny planets. But the moonlight doesn't quite pierce the dusk like your flashlight does, and the landscape around you goes dark.`
            } else if (traits.light === false) {
                return `The outlined ridge ahead makes the horizon into a child's squiggle against the late dusk. You can't quite see the path ahead, but your destination could not be clearer in the fading light.`
            }
        },
        choiceset: [[ // choicetext goes thru the dynamictemplate fn
            {
                title: "Continue",
                text: `<i>Tonight could have been so much darker,</i> you think. The bright nights for the past week should have clued you in to the approaching maximum but
                you haven't been out stargazing since May. The moon, often in the periphery of your window, never moves to announce itself until you're already looking for stars.`,
                scene: "longstraight"
            }
        ]]
    },
    "longstraight": {
        name: "longstraight",
        text: "Your footfalls puff up${traits.light ? '' : ' invisible'} dust; the oaks disappear behind you and you keep forward. "+`There used to be a 
        firewatch tower at the top of this peak--looking across the valley for bright spots, much like you do tonight. But half a century separates you and the rangers, 
        and your subjects are not fires but streetlights, headlights, homes. To seal its fate, the tower burned a few years ago. On the sparse, dry ridge you imagine it was consumed 
        quickly by the heat and light it watched for, season after season.<br><br>There's a rustle in the grass to your left--a sound the gentle breeze could not have made--and you see 
        an opossum digging its distinctive hole on the hunt for less fortunate creatures of the night.`,
        choiceset: [[ // this one's gotta have a choice. it can't be Continue forever...
            {
                title: "Scare it",
                text: "You yell \"Hey!\" at the spot in the grass where the little creature is. It disappears; if you thought you were alone before, now there is no doubt.",
                scene: "falsepeak",
                action: () => traits.skunkwatch = "yell" // super ass. defensive, self conscious?
            },
            {
                title: "Watch",
                text: "You stop for a moment and consider the creature. You can't quite grasp at any thoughts about the little marsupial but it's nice to share a space with another being for a moment.",
                scene: "skunkwatch",
                action: () => traits.skunkwatch = true
            },
            {
                title: "Move on",
                text: "Not wanting to be an imposing presence for the critter's targets--crickets and beetles and worms, surely--you continue up the hill.",
                scene: "falsepeak",
                action: () => traits.skunkwatch = false
            }
        ]],
    },
    "skunkwatch": {
        name: "skunkwatch",
        text: "It turns its head and locks eyes with you. ",
        choiceset: [[
            {
                title: "Continue",
                text: "",
                scene: "falsepeak"
            }
        ]]
    },
    "falsepeak": { // before the wind caves, the little hill you walk around with buckeyes on the right
        name: "falsepeak",
        text: "",
        choiceset: [[

        ]]
    },
    "test": {
        name: "test",
        text: "bad",
        textfn: function() {
            return 'good'
        },
        choiceset: [[
            {
                title: "Keep moving",
                text: "",
                scene: "",
                action: () => {}
            }
        ]]
    }
}