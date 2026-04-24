"use server"

import { updateCustomer } from "@lib/data/customer"

export async function updateCustomerName(
  _currentState: { success: boolean; error: string },
  formData: FormData
): Promise<{ success: boolean; error: string }> {
  try {
    await updateCustomer({
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
    })
    return { success: true, error: "" }
  } catch (error: any) {
    return { success: false, error: error.toString() }
  }
}

export async function updateCustomerPhone(
  _currentState: { success: boolean; error: string },
  formData: FormData
): Promise<{ success: boolean; error: string }> {
  try {
    await updateCustomer({
      phone: formData.get("phone") as string,
    })
    return { success: true, error: "" }
  } catch (error: any) {
    return { success: false, error: error.toString() }
  }
}

export async function updateCustomerEmail(
  _currentState: { success: boolean; error: string },
  formData: FormData
): Promise<{ success: boolean; error: string }> {
  return { success: false, error: "Email cannot be changed. Please contact support." }
}