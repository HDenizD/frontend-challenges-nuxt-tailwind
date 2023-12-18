export default {
  multiStepForm: {
    shared: {
      yearly: 'Jährlich',
      monthly: 'Monatlich',
      month: 'Monat',
      year: 'Jahr',
      shortYearly: 'Jahr',
      shortMonthly: 'Mon',
      currency: '€'
    },
    stepper: {
      step: 'Schritt',
      yourInfo: 'Deine Informationen',
      selectPlan: 'Plan auswählen',
      addOns: 'Add-Ons',
      summary: 'Zusammenfassung',
      nextStep: 'Nächster Schritt',
      goBack: 'Zurück'
    },
    personalInfo: {
      title: 'Persönliche Informationen',
      subTitle:
        'Bitte gib deinen Namen, deine E-Mail-Adresse und deine Telefonnummer an.',
      name: 'Name',
      emailAddress: 'E-Mail-Adresse',
      phoneNumber: 'Telefonnummer',
      phoneNumberPlaceholder: 'z.B. +49 123 456 789',
      validatorMsg: {
        name: {
          required: 'Dieses Feld ist erforderlich'
        },
        email: {
          required: 'Dieses Feld ist erforderlich',
          email: 'Ungültige E-Mail'
        },
        phone: {
          minLength: 'mindestens 6 Zahlen'
        }
      }
    },
    selectPlan: {
      title: 'Plan auswählen',
      subTitle:
        'Du hast die Möglichkeit zwischen monatlicher oder jährlicher Abrechnung.',
      discountText: '2 Monate kostenlos',
      arcade: 'Arcade',
      advanced: 'Fortgeschritten',
      pro: 'Pro',
      validatorMsg: {
        plan: {
          required: 'Bitte wähle einen Plan aus'
        }
      }
    },
    addOns: {
      title: 'Add-Ons auswählen',
      subTitle: 'Add-Ons verbessern dein Spielerlebnis.',
      addon: {
        onlineService: {
          title: 'Online-Service',
          description: 'Zugang zu Multiplayer-Spielen'
        },
        largerStorage: {
          title: 'Größerer Speicher',
          description: 'Zusätzliche 1TB Cloud-Speicher'
        },
        customizableProfile: {
          title: 'Anpassbares Profil',
          description: 'Individuelles Design für dein Profil'
        }
      }
    },
    summary: {
      title: 'Abschließen',
      subTitle: 'Überprüfe alles noch einmal, bevor du bestätigst.',
      change: 'Ändern',
      total: 'Gesamt',
      per: 'pro'
    }
  }
}
