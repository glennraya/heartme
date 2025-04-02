import { Button } from '@/components/ui/button';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import axios from 'axios';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

interface User {
    id: number;
    name: string;
    email: string;
    profile_picture: string | null;
}

export default function Accounts({users}: { users: User[] }) {
    const handleLike = (id: number) => {
        axios
            .post('like', {
                user_id: id,
            })
            .then(() => {
                //
            })
            .catch(() => {
                //
            });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Accounts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex min-h-[100vh] flex-1 items-center justify-center overflow-hidden rounded-xl border md:min-h-min">
                    <div className="flex flex-col items-center justify-center gap-8">
                        {users.map((user) => (
                            <div className="flex gap-3" key={user.id}>
                                <div className="flex size-14 flex-col overflow-hidden rounded-full bg-gray-100 shadow-md shadow-black/10">
                                    {user.profile_picture !== null && <img src={`/images/${user.profile_picture}`} alt="Profile Picture" />}
                                </div>

                                <div className='flex flex-col'>
                                    <span className='text-2xl font-medium'>{user.name}</span>
                                    <span className='text-gray-500'>{user.email}</span>

                                    <Button variant="outline" className="mt-2 max-w-fit self-end" onClick={() => handleLike(user.id)}>
                                        Heart me 😘
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
