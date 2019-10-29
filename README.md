# AngularDesignAdapter

Experiment for a generic design system (code), to use in Angular apps with adapters for the various design systems.

In this experiment currently adapters are used for Material Design (angular-material) and IBM Carbon Design System.

# Contents

This repo contains a demo (main) application and 3 libraries:
- the generic/abstract design system (AngularDesignAdapter)
- implementation for Material Design (AngularDesignAdapterMaterial)
- implementation for Carbon Design System (AngularDesignAdapterCarbon)

Note: as this project is in an early stage it does not contain many components yet.

# Demo

After installing use "npm start" to run the demo application.

By default the demo application uses Material Design.

This can easily be changed to Carbon Design:
- in src/app/assets/styles/app.styles.scss change app.material into app.carbon
- in app.module.ts change the AngularDesignAdapterMaterialModule part into AngularDesignAdapterCarbonModule (easiest by uncommenting/commenting)

That's all !

The app will then hot reload and the demo page styles will change into carbon styles.
  
