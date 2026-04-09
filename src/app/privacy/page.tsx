import GrassFooter from '@/components/GrassFooter'

export const metadata = {
    title: 'Privacy Policy - Flourish',
    description: 'Privacy policy for the Flourish Chrome extension.',
}

export default function PrivacyPolicy() {
    return (
        <main className="font-pixel">
            <div className="mx-auto flex max-w-2xl flex-col gap-8 px-8 py-12 pb-40">
                <h1 className="text-4xl text-[var(--green-primary)] text-shadow-[4px_4px_0_var(--green-highlight)]">
                    Privacy Policy
                </h1>
                <p className="font-sans text-sm text-[var(--foreground)]">
                    Last updated: April 9, 2026
                </p>

                <Section title="Overview">
                    Flourish is a browser productivity extension that helps you
                    track your browsing habits through a plant-growing game
                    mechanic. Your privacy is important to us. This policy
                    explains what data Flourish collects and how it is handled.
                </Section>

                <Section title="Data We Collect">
                    <p className="mb-3">
                        Flourish collects and stores the following data{' '}
                        <strong>locally on your device only</strong>:
                    </p>
                    <ul className="flex list-none flex-col gap-2">
                        <Li>
                            Website domains you designate as productive or
                            unproductive
                        </Li>
                        <Li>A productivity score that resets daily</Li>
                        <Li>
                            Your plant garden (plant types and growth levels)
                        </Li>
                        <Li>Timestamps for score updates and daily resets</Li>
                        <Li>Overlay display preference (enabled/disabled)</Li>
                    </ul>
                </Section>

                <Section title="How Your Data Is Used">
                    All data is used solely to operate the extension — tracking
                    your productivity score, growing your plants, and displaying
                    the in-page overlay.
                </Section>

                <Section title="Data Storage & Sharing">
                    <ul className="flex list-none flex-col gap-2">
                        <Li>
                            All data is stored exclusively in{' '}
                            <strong>{"Chrome's"} local storage</strong> on your
                            device.
                        </Li>
                        <Li>
                            No data is ever transmitted to any server, third
                            party, or external service.
                        </Li>
                        <Li>
                            We do not collect, sell, or share any personal
                            information.
                        </Li>
                    </ul>
                </Section>

                <Section title="Permissions">
                    Flourish requests access to all website URLs solely to
                    monitor which domains you are visiting in order to update
                    your productivity score. The extension does not read page
                    content, form data, or any other information from the pages
                    you visit.
                </Section>

                <Section title="Third-Party Services">
                    Flourish does not use any third-party services, analytics,
                    or remote code.
                </Section>

                <Section title="Data Deletion">
                    You can clear all Flourish data at any time by removing the
                    extension from Chrome, which will delete all locally stored
                    data.
                </Section>

                <Section title="Changes to This Policy">
                    If this policy changes in a meaningful way, the updated
                    version will be distributed with the extension update and
                    reflected in the Chrome Web Store listing.
                </Section>

                <Section title="Contact">
                    If you have any questions about this policy, please open an
                    issue on the project&apos;s{' '}
                    <a
                        className="underline"
                        href="https://github.com/chaz9127/Flourish"
                    >
                        GitHub repository
                    </a>
                    .
                </Section>
            </div>
            <GrassFooter />
        </main>
    )
}

function Section({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) {
    return (
        <section className="flex flex-col gap-3">
            <h2 className="border-b-2 border-[var(--green-primary)] pb-2 text-sm text-[var(--green-primary)]">
                {title}
            </h2>
            <div className="font-sans text-sm leading-relaxed text-[var(--foreground)]">
                {children}
            </div>
        </section>
    )
}

function Li({ children }: { children: React.ReactNode }) {
    return (
        <li className="flex gap-2">
            <span className="text-[var(--green-primary)]">{'>'}</span>
            {children}
        </li>
    )
}
