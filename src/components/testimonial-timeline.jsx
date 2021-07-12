import * as React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {config} from "../config";
import {ChatQuote} from "react-bootstrap-icons";

export function TestimonialTimeline(props) {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255, .7)', color: config.primaryColor }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<ChatQuote />}
            >
                <h5 className="vertical-timeline-element-subtitle">"I’ve been with Optimal Fitness Boston for over 3 years and couldn’t be happier with the results. All of the trainers are friendly and encouraging. Eryenne always pushes you to give it your all, and has a really positive attitude. She really takes the time to listen and learn what’s going on with one’s body, what’s working, what can be tweaked, etc. Completing an OFit workout is always one of the best parts of my day. I would highly recommend OFit to others!"</h5>
                <p>- Nancy C</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255, .7)', color: config.primaryColor }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<ChatQuote />}
            >
                <h5 className="vertical-timeline-element-subtitle">"I’ve been with Optimal Fitness Boston for over 3 years and couldn’t be happier with the results. All of the trainers are friendly and encouraging. Eryenne always pushes you to give it your all, and has a really positive attitude. She really takes the time to listen and learn what’s going on with one’s body, what’s working, what can be tweaked, etc. Completing an OFit workout is always one of the best parts of my day. I would highly recommend OFit to others!"</h5>
                <p>- Nancy C</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255, .7)', color: config.primaryColor }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<ChatQuote />}
            >
                <h5 className="vertical-timeline-element-subtitle">"I would highly recommend Optimal Fitness to anyone who wants to train with a professional, whether merely to keep in shape, build strength after an injury, or achieve an athletic goal. I was looking for all three. I live in Lexington and have been training with Laurie Lamoureux Borrelli for three years. When we began, I had a severe case of tendonosis in both elbows and was unable to grip or lift anything. In addition to wanting to get stronger and leaner, I was also preparing to try out for a Masters Synchronized Skating team. Laurie was inventive and so knowledgeable around anatomy and movement that she was able to work around my injury to help me heal and build strength. Her workouts are deceivingly hard….I walk out thinking “was that really a workout?” then I am sore head-to-toe the next day! On top of that, Laurie helps me plan my off-days too, so I can keep advancing. I now have a a 5-6 day/week routine that is manageable and rigorous. Fast forward three three years and…. my elbows are nearly pain free, I made the team, and we won the US Synchro Skating National Championship. Thank you, Laurie, for keeping me lean, healthy and on the ice!"</h5>
                <p>- Rachel</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255, .7)', color: config.primaryColor }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<ChatQuote />}
            >
                <h5 className="vertical-timeline-element-subtitle">"Our entire family has been fortunate to work with Laurie Lamoureux Borrelli and Optimal Fitness for well over a decade. Laurie has always been patient and thoughtful when instructing us how to work out effectively and safely. She adapts to each of our individual needs. These have been wide-ranging and have included maintaining peak performance for high school and college athletes, as well as helping working adults to develop core strength, stamina and work through injuries. Most importantly, Laurie is a great communicator. She listens closely and always answers our incessant questions about fitness, exercise and our bodies. She always stays in touch and will check up on us - any day of the week. Optimal Fitness and Laurie have remained on the cutting edge of the major advancements in the fitness industry during this time - always seeking to learn more and improve. Laurie has also not missed a beat during the covid pandemic. She has adapted to doing remote workouts for each of us, and even though we had never worked out remotely before, we're now thriving under this system. Our family, like most of her clients, have stayed with Laurie for many years and have seen her and Optimal Fitness get even better over time - and are very appreciative for it."</h5>
                <p>- John S</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
};
