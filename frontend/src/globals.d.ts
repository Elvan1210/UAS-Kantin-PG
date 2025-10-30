    // Beri tahu TypeScript cara menangani impor file CSS
    declare module '*.css' {
      const content: { [className: string]: string };
      export default content;
    }