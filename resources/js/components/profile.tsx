import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import '../echo';

interface LikeEvent {
    likedUser: {
        name: string;
        like: Like;
    };
}

interface Like {
    id: number;
    like_count: number;
}

const Profile = () => {
    const { auth } = usePage<SharedData>().props;

    const [likeCount, setLikeCount] = useState<number>(0);

    useEffect(() => {
        setLikeCount(auth.user.like?.like_count);

        Echo.private(`like.${auth.user.id}`).listen('LikeEvent', (event: LikeEvent) => {
            // console.log(event);

            setLikeCount(event.likedUser.like.like_count);
        });
    }, [auth.user.id, auth.user.like?.like_count]);

    return (
        <>
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex size-20 flex-col overflow-hidden rounded-full bg-gray-100 shadow-md shadow-black/10">
                    {auth.user.avatar !== null && <img src={`/images/${auth.user.avatar}`} alt="Profile Picture" />}
                </div>
                <div className="flex">
                    <span className="text-xl">{auth.user.name}</span>
                </div>
                <div className="flex gap-2 divide-x divide-gray-200">
                    <div className="flex items-center gap-2 pr-6 text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                            </svg>
                            <span>Posts</span>
                        </div>
                        <span>143</span>
                    </div>

                    <div className="flex items-center gap-2 pr-6 text-sm">
                        <div className="flex items-center gap-2 px-2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path
                                    fillRule="evenodd"
                                    d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Profile Views</span>
                        </div>
                        <span>255</span>
                    </div>

                    <div className="flex items-center gap-2 pr-6 text-sm">
                        <div className="flex items-center gap-2 px-2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                                <path
                                    fillRule="evenodd"
                                    d="M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0 0 17.088 4.5H6.912a1.5 1.5 0 0 0-1.434 1.059L3.265 12.75H6.11a3 3 0 0 1 2.684 1.658l.256.513a1.5 1.5 0 0 0 1.342.829h3.218a1.5 1.5 0 0 0 1.342-.83l.256-.512a3 3 0 0 1 2.684-1.658h2.844Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Inbox</span>
                        </div>
                        <span>11</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-red-500">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>

                <span className="text-2xl font-medium">{likeCount > 0 ? likeCount : 0}</span>
            </div>
        </>
    );
};

export default Profile;
