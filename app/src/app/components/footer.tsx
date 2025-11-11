export default function Footer() {
  return (
    <footer className="flex justify-center items-center mt-16 text-sm text-gray-500">
      <div className="text-center">
        <div>© {new Date().getFullYear()} Mohit Murjani</div>
        <div className="mt-2">Made with ⚡ and too much coffee</div>
      </div>
    </footer>
  );
}