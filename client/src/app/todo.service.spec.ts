/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';

import { BaseRequestOptions, Response, ResponseOptions, Http } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { TodoService } from './todo.service';
import { TodoItemFactory } from './misc/todoItemFactory';

describe('TodoService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ],
    });
  });


  it('should ...', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));


  it('should return mocked response', inject([TodoService, MockBackend], (testService: TodoService, backend: MockBackend) => {

    // Arrange
    const baseResponseText = '["list", "of", "todo", "items"]';
    const baseResponse = new Response(new ResponseOptions({ body: baseResponseText }));
    backend.connections.subscribe( (c: MockConnection) => c.mockRespond(baseResponse) );

    const testTodoItem = TodoItemFactory.createTodoItem("testTodoTitle", true);

    // Act
    const request = testService.sendInsertRequest(testTodoItem)

    // Assert
    request.subscribe( (response: Response) => {
      expect(response.text()).toBe(baseResponseText);
      console.log(`Received: ${response.text()}`);
    });

  }));


});
