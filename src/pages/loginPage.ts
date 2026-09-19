import type { Page } from '@playwright/test';
import { BasePage } from './basePage';

const loginUrl = `${process.env.BASE_URL ?? 'https://opensource-demo.orangehrmlive.com'}/web/index.php/auth/login`;

export class LoginPage extends BasePage {
	private readonly loginHeading = this.factory.getLocator('role', 'heading', { name: 'Login' });
	private readonly usernameInput = this.factory.getLocator('role', 'textbox', { name: 'Username' });
	private readonly passwordInput = this.factory.getLocator('role','textbox',{name: 'Password'});
	private readonly loginButton = this.factory.getLocator('role', 'button', { name: 'Login' });
	private readonly dashboardHeading = this.factory.getLocator('role','heading', { name: 'Dashboard' });
	private readonly authenticationError = this.factory.getLocator('text', /invalid credentials|required/i);

	constructor(page: Page) {
		super(page);
	}

	async launchApplication(): Promise<void> {
		await this.navigateTo(loginUrl);
		await this.expectLocatorVisible(this.loginHeading);
	}

	async loginToApplication(username: string, password: string): Promise<void> {
		await this.fillLocator(this.usernameInput, username);
		await this.fillLocator(this.passwordInput, password);
		await this.clickLocator(this.loginButton);
	}

	async expectDashboard(): Promise<void> {
		await this.expectLocatorVisible(this.dashboardHeading);
	}

	async expectInvalidCredentialsError(): Promise<void> {
		await this.expectLocatorVisible(this.authenticationError);
	}
}

