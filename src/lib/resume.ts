/** Résumé download: fetch the PDF as a blob so the browser saves it with the
 *  right filename instead of navigating; falls back to opening it in a tab. */
export async function downloadResume() {
  const filename = 'Santhoshkumar_Karthikeyan_Resume.pdf';
  try {
    const res = await fetch('/resume.pdf');
    if (!res.ok) throw new Error('fetch failed');
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  } catch {
    window.open('/resume.pdf', '_blank', 'noopener');
  }
}
