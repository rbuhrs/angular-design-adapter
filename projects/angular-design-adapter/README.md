# AngularDesignAdapter

Experiment for a generic design system (code), to use in Angular apps with adapters for the various design systems.

In this experiment adapters are used for Material Design (angular-material) and IBM Carbon Design System.

# Expected benefits

Decoupling of the application and used design system code or library.

Development teams can start building using e.g material while the (branded) project design system and/or component library are being designed/developed. Decoupling of team dependencies.
 
# Expected downsides

The generic design systems components are expected to only contain the common denominator of UI patterns and functionalities of the supporting design systems.

# Questions to be answered

Is a generic design system feasible to build and maintain ?

Does it have a performance issues ?

Do benefits outweigh the downsides ?

For instance, having only the common denominator of UI features might not be a bad thing, as using other features can also be an impediment for switching to different design system in the future. And alternative U patterns might exist which can be implemented.

Also users might be less accustomed to functionalities not being in the common set of UI patterns.
