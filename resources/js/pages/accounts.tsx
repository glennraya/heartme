import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import axios from 'axios';
import { useEffect } from 'react';
import '../echo';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface LikeEvent {
    likedUser: {
        name: string;
    };
}

export default function Dashboard() {
    useEffect(() => {
        Echo.private(`like.2`).listen('Like', (event: LikeEvent) => {
            console.log(event);
            // console.log(event.likedUser.name);
        });
    }, []);

    const handleLike = () => {
        axios
            .post('like', {
                user_id: 2,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Accounts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex min-h-[100vh] flex-1 items-center justify-center overflow-hidden rounded-xl border md:min-h-min">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <Button type="button" size="lg" onClick={handleLike}>
                            Like
                        </Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
