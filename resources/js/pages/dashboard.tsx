import Profile from '@/components/profile';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    useEffect(() => {
        //
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex min-h-[100vh] flex-1 items-center justify-center overflow-hidden rounded-xl border md:min-h-min">
                    <div className="flex flex-col items-center justify-center gap-8">
                        <Profile />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
