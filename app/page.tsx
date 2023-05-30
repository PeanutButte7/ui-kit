import { Checkbox } from '../components/ui/checkbox';

export default function Page() {
    return (
        <main className='container mx-auto text-center'>
            <h1 className='text-3xl font-bold underline'>Hey there!</h1>
            <div className='flex items-center space-x-2'>
                <Checkbox id='terms' />
                <label
                    htmlFor='terms'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                >
                    Accept terms and conditions
                </label>
            </div>
        </main>
    );
}
