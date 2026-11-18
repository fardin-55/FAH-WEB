import { EmailTools } from '@/components/scanner/EmailTools';

export default function EmailCheckerPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Email Intelligence</h1>
          <p className="text-slate-400 text-lg">Verify email formatting and scan content for potential phishing risks.</p>
        </header>
        <EmailTools />
      </div>
    </div>
  );
}
