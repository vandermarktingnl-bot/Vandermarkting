import { db } from '../firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

// Gebruiker ophalen uit database
export const getUser = async (uid) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error bij ophalen gebruiker:', error);
    throw error;
  }
};

// Nieuwe gebruiker aanmaken of bestaande bijwerken
export const createOrUpdateUser = async (uid, userData) => {
  try {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      // Update bestaande gebruiker
      await updateDoc(userRef, userData);
    } else {
      // Maak nieuwe gebruiker aan
      await setDoc(userRef, {
        ...userData,
        createdAt: new Date().toISOString(),
        subscription: userData.subscription || 'Basic',
      });
    }
    
    return true;
  } catch (error) {
    console.error('Error bij aanmaken/bijwerken gebruiker:', error);
    throw error;
  }
};

// Abonnement bijwerken
export const updateSubscription = async (uid, subscriptionType) => {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      subscription: subscriptionType,
      updatedAt: new Date().toISOString()
    });
    
    return true;
  } catch (error) {
    console.error('Error bij bijwerken abonnement:', error);
    throw error;
  }
};