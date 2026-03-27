const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
            G
          </div>
          <span>Gradehood AI Income Accelerator</span>
        </div>
        <p>© {new Date().getFullYear()} Gradehood. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
