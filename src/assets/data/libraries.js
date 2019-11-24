export default [
  {
    name: 'Dagger',
    description: 'Dagger is a dependency injector aimed to perform well on low-end devices. It is used a few times to create some ‘generic’ components on a ‘util.dagger’ package that will be reused on the rest of the app. This package is used on 50+ kotlin files across the app.',
    images: [
      {
        src: 'dagger-1.png',
        filePath: 'twidere\\src\\main\\kotlin\\org\\mariotaku\\twidere\\util\\dagger\\ApplicationModule.kt',
      },
    ],
  },
  {
    name: 'ParcelablePlease',
    description: '"Annotation processor for generating Android Parcelable boilerplate codeloader". The way it is used is adding an annotation to a class, implementing ‘Parcelable’ and adding a CREATOR method to the target class.',
    images: [
      {
        src: 'ppls-1.png',
        filePath: 'twidere.component.common\\src\\main\\java\\org\\mariotaku\\microblog\\library\\fanfou\\model\\Conversation.java',
      },
      {
        src: 'ppls-2.png',
        filePath: 'twidere.component.common\\src\\main\\java\\org\\mariotaku\\microblog\\library\\fanfou\\model\\Conversation.java',
      },
    ],
  },
  {
    name: 'ObjectCursor',
    description: 'Custom library made by the app’s author to easen accessing cursors of boilerplate code. It is implemented by adding annotations to classes that generate boilerplate code and used when accessing that class’ indices',
    images: [
      {
        src: 'obj-cursor.png',
        filePath: 'twidere.component.common\\src\\main\\java\\org\\mariotaku\\twidere\\model\\Draft.java',
      },
      {
        src: 'obj-cursor-1.png',
        filePath: 'twidere\\src\\main\\kotlin\\org\\mariotaku\\twidere\\util\\DataStoreFunctions.kt',
      },
    ],
  },
  {
    name: 'Stetho',
    description: 'Stetho is an open source debug bridge for Android applications developed by facebook. It is used on the DebugUtils class of the app, and on some dumper scripts:',
    images: [
      {
        src: 'stetho-1.png',
        filePath: 'twidere\\src\\debug\\java\\org\\mariotaku\\twidere\\util\\DebugModeUtils.java',
      },
      {
        src: 'stetho-2.png',
        filePath: 'twidere\\src\\debug\\kotlin\\org\\mariotaku\\twidere\\util\\stetho\\UserStreamDumperPlugin.kt',
      },
    ],
  },
  {
    name: 'StethoBeanShellREPL',
    description: 'A extension of Stetho to use the BeanShell instead of Rhino to easen debug for java developers. It is also custom library made by the project’s author.',
    images: [
      {
        src: 'stetho-bean-1.png',
        filePath: 'twidere\\src\\debug\\java\\org\\mariotaku\\twidere\\util\\DebugModeUtils.java',
      },
    ],
  },
  {
    name: 'Leakcanary',
    description: 'Leakcanary is a library that acts as a memory leak detector for android apps. It is used on the debug utils of the app:',
    images: [
      {
        src: 'leakcanary-1.png',
        filePath: 'twidere\\src\\debug\\java\\org\\mariotaku\\twidere\\util\\DebugModeUtils.java',
      },
    ],
  },
  {
    name: 'Jsonpath',
    description: 'A java domain specific language (DSL) for reading json documents. It is used to dump objects while debugging:',
    images: [
      {
        src: 'jsonpath.png',
        filePath: 'twidere\\src\\debug\\kotlin\\org\\mariotaku\\twidere\\util\\stetho\\AccountsDumperPlugin.kt',
      },
    ],
  },
  /* {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  },
  {
    name: '',
    description: '',
    images: [
      {
        src: '',
        filePath: '',
      },
    ],
  }, */
];
