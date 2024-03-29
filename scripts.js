
const projects = [
    {
        thumbnail: 'thumb/a2tpnq0z7s.png',
        name: 'Simplex method for linear programming',
        date: 'Wed, 12 Jul 2023',
        description: 'Description of Project 1',
        link: 'https://www.desmos.com/calculator/a2tpnq0z7s',
    },
    {
        thumbnail: 'thumb/g3ptfr8zlt.png',
        name: 'Cayley Graph',
        date: 'Sun, 21 May 2023',
        description: 'Description of Project 2',
        link: 'https://www.desmos.com/calculator/g3ptfr8zlt',
    },
    {
        thumbnail: 'thumb/vr8jhfngmq.png',
        name: 'Complex Power of a Matrix',
        date: 'Sat, 10 Sep 2022',
        description: 'Description of Project 3',
        link: 'https://www.desmos.com/calculator/vr8jhfngmq',
    },
    {
        thumbnail: 'thumb/zam9tme05v.png',
        name: 'Fractions Viz.',
        date: 'Fri, 22 Jul 2022',
        description: 'Description of Project 4',
        link: 'https://www.desmos.com/calculator/zam9tme05v',
    },
    {
        thumbnail: 'thumb/f841kp0vis.png',
        name: '[codegolf] All Possible Ties in Tic-Tac-Toe',
        date: 'Thu, 21 Jul 2022',
        description: 'Description of Project 5',
        link: 'https://www.desmos.com/calculator/f841kp0vis',
    },
    {
        thumbnail: 'thumb/johnconway.png',
        name: '[v2] Conway\'s Game of Life!',
        date: 'Mon, 18 Jul 2022',
        description: 'An updated version that allows the user to directly import .rle files and simulate them on an infinite xy plane!',
        link: 'https://www.desmos.com/calculator/johnconway',
    },
    {
        thumbnail: 'thumb/fdziqe3aqw.png',
        name: 'Arbitrary Implicit Equation through points',
        date: 'Sat, 14 May 2022',
        description: 'Description of Project 7',
        link: 'https://www.desmos.com/calculator/fdziqe3aqw',
    },
    {
        thumbnail: 'thumb/ue3kzzo82h.png',
        name: 'Morse Code',
        date: 'Mon, 02 May 2022',
        description: 'Description of Project 8',
        link: 'https://www.desmos.com/calculator/ue3kzzo82h',
    },
    {
        thumbnail: 'thumb/cpdcg8yvud.png',
        name: 'Domain Coloring the Mandelbrot',
        date: 'Thu, 28 Apr 2022',
        description: 'Description of Project 9',
        link: 'https://www.desmos.com/calculator/cpdcg8yvud',
    },
    {
        thumbnail: 'thumb/gcme8j5gvm.png',
        name: 'Bezier Curves with "DesmosLockNotLock"',
        date: 'Wed, 27 Apr 2022',
        description: 'Description of Project 10',
        link: 'https://www.desmos.com/calculator/gcme8j5gvm',
    },
    {
        thumbnail: 'thumb/ws7zeeby2p.png',
        name: 'Divisibility Graph',
        date: 'Wed, 20 Apr 2022',
        description: 'Description of Project 11',
        link: 'https://www.desmos.com/calculator/ws7zeeby2p',
    },
    {
        thumbnail: 'thumb/qchk29qgis.png',
        name: 'Determinant Calculator',
        date: 'Thu, 24 Mar 2022',
        description: 'Time efficient determinant calculator',
        link: 'https://www.desmos.com/calculator/qchk29qgis',
    },
    {
        thumbnail: 'thumb/j5en1seoes.png',
        name: 'Double Pendulum',
        date: 'Wed, 09 Feb 2022',
        description: 'Description of Project 12',
        link: 'https://www.desmos.com/calculator/j5en1seoes',
    },
    {
        thumbnail: 'thumb/dkpydbdgul.png',
        name: 'Rubik\'s Tesseract!',
        date: 'Wed, 02 Feb 2022',
        description: '4d Rubik\'s Cube',
        link: 'https://www.desmos.com/calculator/dkpydbdgul',
    },
    {
        thumbnail: 'thumb/tsetnoc021.png',
        name: 'Spherical circles casting spherical shadows',
        date: 'Sat, 29 Jan 2022',
        description: 'Finalist of Global Art Contest 2021!',
        link: 'https://www.desmos.com/calculator/tsetnoc021',
        additional: 'View: <a href="https://www.desmos.com/art-2021#17" target="_blank">Click</a>'
    },
    {
        thumbnail: 'thumb/hdflvldthg.png',
        name: 'Stack of cubes from a net gif',
        date: 'Fri, 07 Jan 2022',
        description: 'Description of Project 13',
        link: 'https://www.desmos.com/calculator/hdflvldthg',
    },
    {
        thumbnail: 'thumb/knjobwkgke.png',
        name: 'Analytic Continuation',
        date: 'Thu, 23 Dec 2021',
        description: 'Description of Project 14',
        link: 'https://www.desmos.com/calculator/knjobwkgke',
    },
    {
        thumbnail: 'thumb/okmfeyviym.png',
        name: 'Drone!',
        date: 'Mon, 20 Dec 2021',
        description: 'Description of Project 15',
        link: 'https://www.desmos.com/calculator/okmfeyviym',
    },
    {
        thumbnail: 'thumb/b6spxrmllr.png',
        name: 'Desmos Human',
        date: 'Wed, 15 Dec 2021',
        description: '3D Interactive Walking Human',
        link: 'https://www.desmos.com/calculator/b6spxrmllr',
    },
    {
        thumbnail: 'thumb/rubikscube.png',
        name: 'Rubik\'s Cube',
        date: 'Sat, 11 Dec 2021',
        description: '3D Interactive Rubik\'s Cube',
        link: 'https://www.desmos.com/calculator/rubikscube',
    },
    {
        thumbnail: 'thumb/lh4x967cvy.png',
        name: 'Butterfly effect with a laser',
        date: 'Thu, 09 Dec 2021',
        description: 'Illustrating the butterfly effect by shining a laser at a bunch of circles',
        link: 'https://www.desmos.com/calculator/lh4x967cvy',
    },
    {
        thumbnail: 'thumb/annotating.png',
        name: 'Spherical circles casting circular shadows',
        date: 'Sat, 04 Dec 2021',
        description: 'Explaining my art contest submission (2021)',
        link: 'https://www.desmos.com/calculator/annotating',
    },
    {
        thumbnail: 'thumb/l4hggbbvil.png',
        name: 'Morley\'s Trisector Theorem',
        date: 'Wed, 01 Dec 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/l4hggbbvil',
    },
    {
        thumbnail: 'thumb/bmz1kpouzk.png',
        name: 'Buffon\'s Needle Problem',
        date: 'Wed, 01 Dec 2021',
        description: 'Calculating pi using Buffon\'s Needle',
        link: 'https://www.desmos.com/calculator/bmz1kpouzk',
    },
    {
        thumbnail: 'thumb/zs5zdgloqo.png',
        name: 'Encyclopedia of Triangle Centers',
        date: 'Mon, 29 Nov 2021',
        description: 'ETC',
        link: 'https://www.desmos.com/calculator/zs5zdgloqo',
    },
    {
        thumbnail: 'thumb/vxm0iqrlcg.png',
        name: 'Banchoff-Chmutov surface',
        date: 'Wed, 24 Nov 2021',
        description: '3d implicit graph by counter plot of its cross sections',
        link: 'https://www.desmos.com/calculator/vxm0iqrlcg',
    },
    {
        thumbnail: 'thumb/zotmh5ackw.png',
        name: 'Steiner\'s Porism',
        date: 'Wed, 17 Nov 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/zotmh5ackw',
    },
    {
        thumbnail: 'thumb/hzxqyrcnwu.png',
        name: 'Stereographic Projection',
        date: 'Tue, 16 Nov 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/hzxqyrcnwu',
    },
    {
        thumbnail: 'thumb/z6wijuxd77.png',
        name: 'Lorenz Attractor',
        date: 'Sun, 14 Nov 2021',
        description: 'Lorenz Attractor along with a 3d chaotic map',
        link: 'https://www.desmos.com/calculator/z6wijuxd77',
    },
    {
        thumbnail: 'thumb/krkktorhxi.png',
        name: '[circular inv] Voronoi wallpaper animation',
        date: 'Fri, 12 Nov 2021',
        description: 'Applying circular inversion on a previous voronoi wallpaper animation',
        link: 'https://www.desmos.com/calculator/krkktorhxi',
    },
    {
        thumbnail: 'thumb/6ympi9ss8u.png',
        name: '3D Metaballs',
        date: 'Thu, 11 Nov 2021',
        description: '3d surfaces formed by inequalities instead of marching cubes',
        link: 'https://www.desmos.com/calculator/6ympi9ss8u',
    },
    {
        thumbnail: 'thumb/s1ryvikewh.png',
        name: 'Chaotic Map of Double Pendulum',
        date: 'Fri, 05 Nov 2021',
        description: 'Time evolution of chaotic map of (l1,l2) space for double pendulum of l1,l2 length',
        link: 'https://www.desmos.com/calculator/s1ryvikewh',
    },
    {
        thumbnail: 'thumb/bmduhozgyd.png',
        name: 'Complex Fibonacci Numbers',
        date: 'Thu, 04 Nov 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/bmduhozgyd',
    },
    {
        thumbnail: 'thumb/ocm8appehm.png',
        name: '[spidey] platformer game',
        date: 'Tue, 02 Nov 2021',
        description: 'Like a spiderman that can stick to surfaces. Inspired by another project of mine called Handulum',
        link: 'https://www.desmos.com/calculator/ocm8appehm',
    },
    {
        thumbnail: 'thumb/1phbrghuhc.png',
        name: 'Interactive Fourier Series',
        date: 'Tue, 26 Oct 2021',
        description: 'Draw something with the same end points (loop) and generate its fourier series to reproduce it!',
        link: 'https://www.desmos.com/calculator/1phbrghuhc',
    },
    {
        thumbnail: 'thumb/yp8xfjysbb.png',
        name: '[hidden Mandelbrot] newton\'s fractal',
        date: 'Mon, 18 Oct 2021',
        description: 'A project inspired by 3b1b\'s newton\'s fractal video',
        link: 'https://www.desmos.com/calculator/yp8xfjysbb',
    },
    {
        thumbnail: 'thumb/2grudhoovu.png',
        name: 'Voronoi wallpaper animation',
        date: 'Thu, 14 Oct 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/2grudhoovu',
    },
    {
        thumbnail: 'thumb/vwiv1ta0dc.png',
        name: 'Newton\'s fractal',
        date: 'Wed, 13 Oct 2021',
        description: 'For a degree 5 expression',
        link: 'https://www.desmos.com/calculator/vwiv1ta0dc',
    },
    {
        thumbnail: 'thumb/gsgncdg6pr.png',
        name: 'Nested binary system',
        date: 'Mon, 11 Oct 2021',
        description: 'Gravity simulator',
        link: 'https://www.desmos.com/calculator/gsgncdg6pr',
    },
    {
        thumbnail: 'thumb/upmdbl0aof.png',
        name: 'Möbius strip',
        date: 'Fri, 01 Oct 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/upmdbl0aof',
    },
    {
        thumbnail: 'thumb/hpne0buzxg.png',
        name: 'Turing Machine',
        date: 'Thu, 23 Sep 2021',
        description: 'Demonstrates calculation of factorial of a number using a turing machine with 3 tapes. Project works for any given turing program.',
        link: 'https://www.desmos.com/calculator/hpne0buzxg',
        additional: 'Credit: <a href="https://turingmaschine.klickagent.ch/mehrband" target="_blank">Click</a>'
    },
    {
        thumbnail: 'thumb/ujnzevgqcn.png',
        name: '[v2] Lights Out Puzzle (solver)',
        date: 'Tue, 07 Sep 2021',
        description: 'Solves the lights out puzzle by making use of superposition of outcomes',
        link: 'https://www.desmos.com/calculator/ujnzevgqcn',
    },
    {
        thumbnail: 'thumb/knuthpower.png',
        name: 'Knuth\'s up-arrow notation',
        date: 'Tue, 24 Aug 2021',
        description: 'Manim-like animation that writes out Knuth\'s up-arrow notation in terms of powers',
        link: 'https://www.desmos.com/calculator/knuthpower',
    },
    {
        thumbnail: 'thumb/obx4mbvasb.png',
        name: 'Origami Square Base',
        date: 'Tue, 17 Aug 2021',
        description: 'A basic origami base fold',
        link: 'https://www.desmos.com/calculator/obx4mbvasb',
    },
    {
        thumbnail: 'thumb/inequality.png',
        name: 'Beautiful Inequality',
        date: 'Thu, 12 Aug 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/inequality',
    },
    {
        thumbnail: 'thumb/mandelbrot.png',
        name: 'Zoom In and Zoom Out of the Mandelbrot Set!',
        date: 'Thu, 12 Aug 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/mandelbrot',
    },
    {
        thumbnail: 'thumb/yug702dm3y.png',
        name: 'collatz tree recolored',
        date: 'Wed, 04 Aug 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/yug702dm3y',
    },
    {
        thumbnail: 'thumb/y2nggrdjpi.png',
        name: 'Intersection between a Cone and a Plane',
        date: 'Wed, 21 Jul 2021',
        description: 'Finding a basis in the plane and doing vector math',
        link: 'https://www.desmos.com/calculator/y2nggrdjpi',
    },
    {
        thumbnail: 'thumb/w5unoezfbx.png',
        name: 'Funny Fractions and Ford Circles',
        date: 'Mon, 19 Jul 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/w5unoezfbx',
    },
    {
        thumbnail: 'thumb/dpsyatugb1.png',
        name: 'stereographic projection 4d (quaternions)',
        date: 'Wed, 07 Jul 2021',
        description: 'Quaternions are a game-changer!',
        link: 'https://www.desmos.com/calculator/dpsyatugb1',
    },
    {
        thumbnail: 'thumb/xgbjhxtvlq.png',
        name: 'A Star Search Algorithm',
        date: 'Sat, 22 May 2021',
        description: 'Thank you Computerphile',
        link: 'https://www.desmos.com/calculator/xgbjhxtvlq',
    },
    {
        thumbnail: 'thumb/rtml4brn0a.png',
        name: 'Dijkstra\'s algorithm- City Road Plan',
        date: 'Fri, 21 May 2021',
        description: 'Thank you Computerphile',
        link: 'https://www.desmos.com/calculator/rtml4brn0a',
    },
    {
        thumbnail: 'thumb/wlkzfoly9i.png',
        name: 'Electric Field v3',
        date: 'Sun, 02 May 2021',
        description: 'An inequality helps draw out the electric field over the complete R^2',
        link: 'https://www.desmos.com/calculator/wlkzfoly9i',
    },
    {
        thumbnail: 'thumb/p8hukp0ahl.png',
        name: 'Tupper\'s self-referential formula',
        date: 'Sun, 02 May 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/p8hukp0ahl',
    },
    {
        thumbnail: 'thumb/3ywvunuks8.png',
        name: 'Rubik\'s Cube Fourier Series',
        date: 'Wed, 28 Apr 2021',
        description: 'Fourier series of the me314 logo (rubik\'s cube) with a zoomed preview on the right',
        link: 'https://www.desmos.com/calculator/3ywvunuks8',
    },
    {
        thumbnail: 'thumb/lzoq1gx4n4.png',
        name: 'Longest Increasing Subsequence',
        date: 'Tue, 13 Apr 2021',
        description: 'Dynamic Programming problem',
        link: 'https://www.desmos.com/calculator/lzoq1gx4n4',
    },
    {
        thumbnail: 'thumb/nllevqpah3.png',
        name: 'Laplace Transform (v2)',
        date: 'Sun, 14 Mar 2021',
        description: 'Laplace Transform visualization. Thank you 3b1b.',
        link: 'https://www.desmos.com/calculator/nllevqpah3',
    },
    {
        thumbnail: 'thumb/bnq2sovdzo.png',
        name: 'Fourier Transform',
        date: 'Fri, 19 Feb 2021',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/bnq2sovdzo',
    },
    {
        thumbnail: 'thumb/ydndq3g6u5.png',
        name: '.MOL v4',
        date: 'Wed, 27 Jan 2021',
        description: 'One can import and view any chemical molecule in 3d using a .mol file',
        link: 'https://www.desmos.com/calculator/ydndq3g6u5',
    },
    {
        thumbnail: 'thumb/ro6kcmtb1e.png',
        name: '2048 (Final Version, Draggable Anywhere!)',
        date: 'Fri, 27 Nov 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/ro6kcmtb1e',
    },
    {
        thumbnail: 'thumb/0couytihaz.png',
        name: 'Handulum! (Playground)',
        date: 'Tue, 17 Nov 2020',
        description: 'Inspired by this cool math game: ',
        link: 'https://www.desmos.com/calculator/0couytihaz',
        additional: '<a href="https://www.coolmathgames.com/0-handulum" target="_blank">Handulum+</a>'
    },
    {   
        thumbnail: 'thumb/sm9xgvpc1f.png',
        name: 'Solve \'Complex\' Equations!',
        date: 'Wed, 21 Oct 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/sm9xgvpc1f',
    },
    {
        thumbnail: 'thumb/botdk1eyam.png',
        name: 'Finding Roots of Three Equations in Three Variables',
        date: 'Mon, 19 Oct 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/botdk1eyam',
    },
    {
        thumbnail: 'thumb/ltecezmarg.png',
        name: 'Newtons Method of Approximating Lambert W',
        date: 'Sun, 27 Sep 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/ltecezmarg',
    },
    {
        thumbnail: 'thumb/jpprltrtvj.png',
        name: 'Exact value of sine of angles',
        date: 'Sun, 06 Sep 2020',
        description: 'Recursively applying the half angle formula',
        link: 'https://www.desmos.com/calculator/jpprltrtvj',
    },
    {
        thumbnail: 'thumb/ven0vuup65.png',
        name: 'Error Analysis',
        date: 'Tue, 18 Aug 2020',
        description: 'Visualizing how function neighborhood around a point creates error',
        link: 'https://www.desmos.com/calculator/ven0vuup65',
    },
    {
        thumbnail: 'thumb/8wsol5b9ns.png',
        name: 'Stack Of Circles!',
        date: 'Sun, 09 Aug 2020',
        description: 'Visualizing the 7 stack property of circles! Credit: Mathologer',
        link: 'https://www.desmos.com/calculator/8wsol5b9ns',
    },
    {
        thumbnail: 'thumb/o5xcfc2fy9.png',
        name: 'N-Bonacci Rectangles!',
        date: 'Thu, 06 Aug 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/o5xcfc2fy9',
    },
    {
        thumbnail: 'thumb/dlmmx6e42q.png',
        name: 'Time Dilation!',
        date: 'Tue, 04 Aug 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/dlmmx6e42q',
    },
    {
        thumbnail: 'thumb/hrinxzkppz.png',
        name: 'Tangram',
        date: 'Mon, 27 Jul 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/hrinxzkppz',
    },
    {
        thumbnail: 'thumb/mwhbdmqpp3.png',
        name: 'Selection Sort v2',
        date: 'Sat, 25 Jul 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/mwhbdmqpp3',
    },
    {
        thumbnail: 'thumb/v9im7lvhid.png',
        name: 'Bubble Sort v3',
        date: 'Wed, 22 Jul 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/v9im7lvhid',
    },
    {
        thumbnail: 'thumb/udxuawengf.png',
        name: 'Gears!!!',
        date: 'Wed, 15 Jul 2020',
        description: 'This was a birthday gift for my dad. Involved careful joining of the gears.',
        link: 'https://www.desmos.com/calculator/udxuawengf',
    },
    {
        thumbnail: 'thumb/63ky5kjwgx.png',
        name: 'Normal Vectors To a Torus!',
        date: 'Sun, 12 Jul 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/63ky5kjwgx',
    },
    {
        thumbnail: 'thumb/dsgptyniyj.png',
        name: 'Riemann Zeta Function!',
        date: 'Sat, 04 Jul 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/dsgptyniyj',
    },
    {
        thumbnail: 'thumb/kfmqxy0pmo.png',
        name: 'Center of Mass',
        date: 'Tue, 30 Jun 2020',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/kfmqxy0pmo',
    },
    {
        thumbnail: 'thumb/googlearth.png',
        name: 'Google Earth',
        date: '23 Jun 2020',
        description: '3D Earth in Desmos',
        link: 'https://www.desmos.com/calculator/googlearth',
    },
    {
        thumbnail: 'thumb/91vit72upr.png',
        name: 'Derivative',
        date: 'Thu, 18 Jun 2020',
        description: 'Visualizing the derivative of a single variable function',
        link: 'https://www.desmos.com/calculator/91vit72upr',
    },
    {
        thumbnail: 'thumb/oa02ffe7zv.png',
        name: '[v3] Jacobian',
        date: 'Wed, 10 Jun 2020',
        description: 'Visualization of Jacobian matrix to represent local linearity of a non-linear 2d vector function!',
        link: 'https://www.desmos.com/calculator/oa02ffe7zv',
    },
    {
        thumbnail: 'thumb/n8iznq9j7z.png',
        name: 'Pottery!',
        date: 'Wed, 20 May 2020',
        description: 'Make custom pottery models just by dragging sliders around',
        link: 'https://www.desmos.com/calculator/n8iznq9j7z',
    },
    {
        thumbnail: 'thumb/lcr2d9zu6f.png',
        name: '3d Terrain',
        date: 'Sun, 08 Dec 2019',
        description: '3d Terrains with CounterPlot and Angle of Elevation and Depression based on where you stand. Adapted from a "3D Landscape" template.' ,
        link: 'https://www.desmos.com/calculator/lcr2d9zu6f',
    },
    {
        thumbnail: 'thumb/wrdrts9sdv.png',
        name: 'Convex and Concave Lenses',
        date: 'Thu, 21 Mar 2019',
        description: 'Ray diagram to find the image given the object',
        link: 'https://www.desmos.com/calculator/wrdrts9sdv',
    },
    {
        thumbnail: 'thumb/spirograph.png',
        name: '3D Spirograph!',
        date: 'Wed, 16 Jan 2019',
        description: 'Inspired by the spirograph toy I used to play with as a kid.',
        link: 'https://www.desmos.com/calculator/spirograph',
    },
    {
        thumbnail: 'thumb/5z2lvw7lqi.png',
        name: 'Volume using Disc Method rotation',
        date: 'Thu, 17 Jan 2019',
        description: 'Visualizing the integral disc method around a vertical line',
        link: 'https://www.desmos.com/calculator/5z2lvw7lqi',
    },
    {
        thumbnail: 'thumb/aagshxl1mg.png',
        name: 'Logistic Function',
        date: 'Sat, 12 Jan 2019',
        description: 'Growth Model with a differential equation solution and comparing it with a discrete euler method approximation',
        link: 'https://www.desmos.com/calculator/aagshxl1mg',
    },
    {
        thumbnail: 'thumb/apluiezukx.png',
        name: 'Magic Square Generator',
        date: 'Thu, 10 Jan 2019',
        description: 'Writing numbers diagonally and displacing the position by 1 whenever there\'s a roadblock produces a magic square',
        link: 'https://www.desmos.com/calculator/apluiezukx',
    },
    {
        thumbnail: 'thumb/ai9rgzajju.png',
        name: 'Right Bound Riemann Sum',
        date: 'Wed, 26 Dec 2018',
        description: 'Description of Project',
        link: 'https://www.desmos.com/calculator/ai9rgzajju',
    }
];

const projectGrid = document.getElementById('projectGrid');

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';

    // Project Front
    const projectFront = `
        <div class="project-front">
            <div class="wrap">
            <img src="${project.thumbnail}" alt="${project.name} Thumbnail" class="card-image">
            
                <h2>${project.name}</h2>
                <span class="project-preview">${project.date}</span>
            </div>
        </div>
    `;
    var additionalcontent=project.additional?project.additional:''
    // Project Back
    const projectBack = `
        <div class="project-back">
            <div class="wrap">
                <h2><a href="${project.link}" target="_blank">${project.name}</a></h2>
                <p>${project.description}</p>${additionalcontent}
            </div>
        </div>
    `;

    cardInner.innerHTML = projectFront + projectBack;

    let isTouchDevice = 'ontouchstart' in document.documentElement;
    card.onclick = function() {
        card.classList.toggle('active');
    };
    card.addEventListener('mouseenter', function() {
        if (!card.classList.contains('active')&&!isTouchDevice) {
            card.classList.toggle('active');
        }
    });
    card.addEventListener('mouseleave', function() {
        if (card.classList.contains('active')) {
            card.classList.toggle('active');
        }
    });
    card.appendChild(cardInner);

    return card;
}

// Dynamically creating project cards and appending them to the project grid
projects.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectGrid.appendChild(projectCard);
});
//
const body = document.body;
function toggleLightMode() {
    const projectFronts = document.querySelectorAll('.project-front');
    const activeProjectFronts = document.querySelectorAll('.project-card.active .project-front');

    body.classList.toggle('light-mode', !body.classList.contains('light-mode'));
    projectFronts.forEach((projectFront) => {
        projectFront.style.backgroundColor = body.classList.contains('light-mode') ? '#f5f5f5' : '#222222';
    });

    activeProjectFronts.forEach((activeProjectFront) => {
        activeProjectFront.style.backgroundColor = body.classList.contains('light-mode') ? '#f5f5f5' : '#222222';
    });

    body.style.backgroundColor = body.classList.contains('light-mode') ? '#fff' : '#121212';
    body.style.color = body.classList.contains('light-mode') ? '#000' : '#fff';
    lightModeToggleBtn.classList.toggle('sun-icon', body.classList.contains('light-mode'));
    lightModeToggleBtn.classList.toggle('moon-icon',!body.classList.contains('light-mode'));
}

const lightModeToggleBtn = document.getElementById('lightModeToggleBtn');
lightModeToggleBtn.style.display = 'block';
lightModeToggleBtn.classList.toggle('moon-icon',true);
lightModeToggleBtn.addEventListener('click', toggleLightMode);

